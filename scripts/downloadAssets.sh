#!/usr/bin/env bash
# downloadAssets.sh
# Downloads all WordPress-hosted images/GIFs/PDFs into public/wp-content/uploads/
# Run from the frontend-react directory: bash scripts/downloadAssets.sh

set -e

BASE="http://localhost:10018/wp-content/uploads"
DEST="public/wp-content/uploads"

download() {
  local path="$1"
  local dir
  dir=$(dirname "$path")
  mkdir -p "$DEST/$dir"
  echo "Downloading $path ..."
  curl -s -o "$DEST/$path" "$BASE/$path" || echo "  ⚠️  FAILED: $path"
}

echo "========================================="
echo " Downloading WordPress assets locally..."
echo "========================================="

# ── Logo ──────────────────────────────────────────────────────────────────────
download "2023/09/logo.jpg"

# ── Hero / Background images ──────────────────────────────────────────────────
download "2016/08/profile-bg.jpg"
download "2023/10/profile-bg.jpg"
download "2016/08/board_of_director-bg.jpg"
download "2016/08/board_of_director-bg-1024x301.jpg"
download "2016/08/business-enquiries-bg.jpg"
download "2023/09/business-enquiries-bg.jpg"
download "2016/08/careers-bg.jpg"
download "2023/09/Careers-bg.jpg"
download "2016/08/csr-bg.jpg"
download "2016/08/csr-bg-1024x301.jpg"
download "2023/09/quality_control_new-bg.jpg"
download "2023/09/quality_control_new-bg-1024x302.jpg"
download "2023/09/posted_airfield_prices-bg.jpg"
download "2023/09/posted_airfield_prices-bg-1024x302.jpg"
download "2023/10/profile-bg.jpg"
download "2016/08/20170204_161540.jpg"
download "2016/08/20170204_161540-1024x576.jpg"
download "2023/12/vigilance-image-1.png"
download "2023/12/vigilance-image-1-1024x214.png"
download "2016/08/slider2.jpg"
download "2016/08/slider2-1024x360.jpg"
download "2021/08/Annual-return-1280x720.jpg"
download "2021/08/Annual-return-1280x720-768x325.jpg"

# ── Network GIF ───────────────────────────────────────────────────────────────
download "2023/10/network-video.gif"

# ── Board of Directors portraits ──────────────────────────────────────────────
download "2024/08/ShyamPrasad-Kamath-MRPL.jpg"
download "2024/05/sanjay-verkey.png"
download "2024/05/8.png"
download "2025/06/Photo_Zia-Victor.jpg"
download "2024/05/9.png"
download "2024/05/2.png"
download "2025/04/IMG-20250407-WA0033.jpg"

# ── Management Team portraits ─────────────────────────────────────────────────
download "2024/09/Dev-Soral-Picture.jpg"
download "2016/08/c001.jpg"
download "2016/08/3-1.jpg"
download "2016/08/Thirumala-sir-3.jpg"

# ── Shell page hero ───────────────────────────────────────────────────────────
download "2023/10/profile-bg.jpg"

# ── CSR Projects gallery thumbnails ──────────────────────────────────────────
download "2016/08/DSC_1641-150x150.jpg"
download "2016/08/DSC_1636-150x150.jpg"
download "2016/08/20170204_164137-150x150.jpg"
download "2016/08/20170204_161540-150x150.jpg"
download "2016/08/20170204_164904-150x150.jpg"
download "2016/08/20170204_154643-150x150.jpg"
download "2016/08/20170204_154308-150x150.jpg"

# ── Gallery page — thumbnails ─────────────────────────────────────────────────
download "2023/09/Pic5-e1623674472624-300x138.jpg"
download "2023/09/Pic4-e1623674458152-300x139.jpg"
download "2023/09/Pic3-e1623674444251-300x139.png"
download "2023/09/Pic3-e1623674444251-1-300x139.png"
download "2022/08/OTUU3242-e1700211980252-300x127.jpg"
download "2022/08/LNTT4287-300x169.jpg"
download "2022/08/FHML0461-300x169.jpg"
download "2021/06/Week-300x140.png"
download "2020/11/202011021224_0001-300x212.jpg"
download "2016/08/20170204_164904-300x169.jpg"
download "2016/08/20170204_161540-300x169.jpg"
download "2016/08/20170204_154643-300x169.jpg"
download "2016/08/20170204_154308-300x169.jpg"
download "2016/08/14-300x125.jpg"
download "2016/08/9-300x180.jpg"
download "2016/08/8-300x180.jpg"
download "2016/08/7-2-300x180.jpg"
download "2016/08/5-4-300x180.jpg"
download "2016/08/4-4-300x180.jpg"
download "2016/08/3-4-300x180.jpg"
download "2016/08/2-5-300x180.jpg"
download "2016/08/1-5-300x180.jpg"
download "2016/08/5-3-300x225.jpg"
download "2016/08/4-3-300x166.jpg"
download "2016/08/3-3-300x169.jpg"
download "2016/08/2-4-300x169.jpg"
download "2016/08/1-4-300x169.jpg"
download "2016/08/7-1-300x167.jpg"
download "2016/08/6-1-300x167.jpg"
download "2016/08/5-2-300x167.jpg"
download "2016/08/3-2-300x167.jpg"
download "2018/06/Slider-6-3-300x143.jpg"
download "2016/08/DSC_1641-300x200.jpg"
download "2016/08/DSC_1636-300x200.jpg"
download "2016/08/20170204_164137-300x169.jpg"

# ── Gallery page — full-size images ──────────────────────────────────────────
download "2023/09/Pic5-e1623674472624.jpg"
download "2023/09/Pic4-e1623674458152.jpg"
download "2023/09/Pic3-e1623674444251.png"
download "2023/09/Pic3-e1623674444251-1.png"
download "2022/08/OTUU3242-e1700211980252.jpg"
download "2022/08/LNTT4287.jpg"
download "2022/08/FHML0461.jpg"
download "2021/06/Week.png"
download "2020/11/202011021224_0001.jpg"
download "2016/08/20170204_164904.jpg"
download "2016/08/20170204_161540.jpg"
download "2016/08/20170204_154643.jpg"
download "2016/08/20170204_154308.jpg"
download "2016/08/14.jpg"
download "2016/08/9.jpg"
download "2016/08/8.jpg"
download "2016/08/7-2.jpg"
download "2016/08/5-4.jpg"
download "2016/08/4-4.jpg"
download "2016/08/3-4.jpg"
download "2016/08/2-5.jpg"
download "2016/08/1-5.jpg"
download "2016/08/5-3.jpg"
download "2016/08/4-3.jpg"
download "2016/08/3-3.jpg"
download "2016/08/2-4.jpg"
download "2016/08/1-4.jpg"
download "2016/08/7-1.jpg"
download "2016/08/6-1.jpg"
download "2016/08/5-2.jpg"
download "2016/08/3-2.jpg"
download "2018/06/Slider-6-3.jpg"
download "2016/08/DSC_1641.jpg"
download "2016/08/DSC_1636.jpg"
download "2016/08/20170204_164137.jpg"

# ── Annual Return PDFs ─────────────────────────────────────────────────────────
download "2024/09/Annual-Return-2023-24.pdf"
download "2023/11/Form_MGT_7_Annual-Return.pdf"
download "2021/04/Annual-Return-2021-22.pdf"
download "2021/08/Annual-Return-FY-2020-21.pdf"

echo ""
echo "========================================="
echo " ✅ Done! All assets saved to: $DEST"
echo "========================================="
