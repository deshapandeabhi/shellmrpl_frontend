const fs = require('fs');

// HEADER
let header = fs.readFileSync('src/components/Header.jsx', 'utf-8');
header = header.replace(
`      { label: 'Annual Return', path: '/annual-return' },
      { label: 'CSR Policy', path: '/csr' },
      { label: 'CSR Committee', path: '/csr/committee-members' },
      { label: 'CSR Projects', path: '/csr/projects' },`,
`      { label: 'Annual Return', path: '/annual-return' },
      { 
        label: 'CSR', 
        path: '#',
        children: [
          { label: 'CSR Policy', path: '/csr' },
          { label: 'CSR Committee', path: '/csr/committee-members' },
          { label: 'CSR Projects', path: '/csr/projects' }
        ]
      },`
);

let headerRenderBlock = `{item.children.map((child) => (
                      child.path.startsWith('http') ? (`;
                      
let headerNewRenderBlock = `{item.children.map((child) => (
                      child.children ? (
                        <div key={child.label} className="nav-nested-group">
                          <span className="nav-dropdown-link nested-label">{child.label} <ChevronDown className="nav-chevron-right" /></span>
                          <div className="nav-nested-dropdown">
                            {child.children.map(sub => (
                              <Link key={sub.path} to={sub.path} className="nav-dropdown-link">{sub.label}</Link>
                            ))}
                          </div>
                        </div>
                      ) : child.path.startsWith('http') ? (`;

header = header.replace(headerRenderBlock, headerNewRenderBlock);

let cssInject = `.nav-nested-group { position: relative; }
        .nav-nested-dropdown {
          position: absolute;
          left: 100%;
          top: -10px;
          background: var(--shell-white);
          border: 1px solid var(--gray-100);
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          min-width: 240px;
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }
        .nav-nested-group:hover .nav-nested-dropdown {
          opacity: 1; visibility: visible; transform: translateX(0);
        }
        .nested-label {
          display: flex; justify-content: space-between; align-items: center; cursor: default;
        }
        .nav-chevron-right {
          transform: rotate(-90deg);
          opacity: 0.5;
        }
`;
header = header.replace('.nav-dropdown-link {', cssInject + '\n        .nav-dropdown-link {');
fs.writeFileSync('src/components/Header.jsx', header);


// SIDEBAR
let sidebar = fs.readFileSync('src/components/Sidebar.jsx', 'utf-8');
sidebar = sidebar.replace(
`      { label: 'Annual Return', path: '/annual-return' },
      { label: 'CSR Policy', path: '/csr' },
      { label: 'CSR Committee', path: '/csr/committee-members' },
      { label: 'CSR Projects', path: '/csr/projects' },`,
`      { label: 'Annual Return', path: '/annual-return' },
      { 
        label: 'CSR', 
        path: '#',
        children: [
          { label: 'CSR Policy', path: '/csr' },
          { label: 'CSR Committee', path: '/csr/committee-members' },
          { label: 'CSR Projects', path: '/csr/projects' }
        ]
      },`
);

let childLinkRegex = /function ChildLink\(\{\s*child,\s*onClose\s*\}\)\s*\{[\s\S]*?(?=function FlyoutLink)/;
let newChildLink = `function ChildLink({ child, onClose }) {
  const location = useLocation();
  const isActive = location.pathname === child.path;
  const [expanded, setExpanded] = useState(false);
  
  if (child.children) {
    return (
      <li className="sidebar-nested-item">
        <div className="sidebar-item-header" style={{ paddingLeft: '16px' }}>
          <span className="sidebar-child-link" style={{ cursor: 'pointer', paddingLeft: 0, background: 'transparent' }} onClick={() => setExpanded(!expanded)}>{child.label}</span>
          <button className={\`sidebar-toggle\${expanded ? ' open' : ''}\`} onClick={() => setExpanded(!expanded)}>
             <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <ul className={\`sidebar-children\${expanded ? ' expanded' : ''}\`} style={{ paddingLeft: '16px' }}>
          {child.children.map((sub, j) => (
             <ChildLink key={j} child={sub} onClose={onClose} />
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={child.path}
        className={\`sidebar-child-link\${isActive ? ' active' : ''}\`}
        onClick={onClose}
        aria-current={isActive ? 'page' : undefined}
      >
        {child.label}
      </Link>
    </li>
  );
}
`;
sidebar = sidebar.replace(childLinkRegex, newChildLink);

let flyoutLinkRegex = /function FlyoutLink\(\{\s*child,\s*onClose\s*\}\)\s*\{[\s\S]*?(?=^$|export default)/m;
if (!flyoutLinkRegex.test(sidebar)) {
  flyoutLinkRegex = /function FlyoutLink\(\{\s*child,\s*onClose\s*\}\)\s*\{[\s\S]*/; // fallback to end of file
}
let newFlyoutLink = `function FlyoutLink({ child, onClose }) {
  const location = useLocation();
  const isActive = location.pathname === child.path;

  if (child.children) {
    return (
      <div className="flyout-nested-group">
        <span className="sidebar-flyout-link" style={{ fontWeight: 800, cursor: 'default' }}>{child.label}</span>
        <div className="flyout-nested-children" style={{ paddingLeft: '12px' }}>
          {child.children.map(sub => (
             <FlyoutLink key={sub.path} child={sub} onClose={onClose} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={child.path}
      className={\`sidebar-flyout-link\${isActive ? ' active' : ''}\`}
      onClick={onClose}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      {child.label}
    </Link>
  );
}
`;
sidebar = sidebar.replace(flyoutLinkRegex, newFlyoutLink);

fs.writeFileSync('src/components/Sidebar.jsx', sidebar);
console.log('Menus nested correctly.');
