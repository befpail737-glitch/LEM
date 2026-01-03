#!/bin/bash
# LEM Website Basic Functionality Test Script

echo "==================================="
echo "LEM Website Testing Script"
echo "==================================="

# Define the base URL for testing
BASE_URL="http://localhost:3000" # or the deployed URL

# Function to test a single page
test_page() {
    local url=$1
    local expected_status=$2
    local page_name=$3
    
    echo -n "Testing $page_name: "
    http_code=$(curl -s -o /dev/null -w "%{http_code}" $url)
    
    if [ "$http_code" == "$expected_status" ]; then
        echo "✓ PASS (Status: $http_code)"
    else
        echo "✗ FAIL (Status: $http_code, Expected: $expected_status)"
    fi
}

# Function to check if required elements exist in HTML
check_elements() {
    local url=$1
    local elements=("${@:2}")
    
    html_content=$(curl -s -L $url)
    
    for element in "${elements[@]}"; do
        if echo "$html_content" | grep -q "$element"; then
            echo "  ✓ Found: $element"
        else
            echo "  ✗ Missing: $element"
        fi
    done
}

# Test main pages
echo
echo "1. Testing main pages:"
test_page "$BASE_URL/index.html" "200" "Homepage"
test_page "$BASE_URL/products/index.html" "200" "Products"
test_page "$BASE_URL/solutions/index.html" "200" "Solutions"
test_page "$BASE_URL/support/index.html" "200" "Support"
test_page "$BASE_URL/news/index.html" "200" "News"
test_page "$BASE_URL/about/index.html" "200" "About Us"
test_page "$BASE_URL/contact/index.html" "200" "Contact"

# Test product category pages
echo
echo "2. Testing product category pages:"
test_page "$BASE_URL/products/hall-sensors/index.html" "200" "Hall Sensors"
test_page "$BASE_URL/products/voltage-transducers/index.html" "200" "Voltage Transducers"
test_page "$BASE_URL/products/high-precision/index.html" "200" "High Precision"
test_page "$BASE_URL/products/automotive/index.html" "200" "Automotive Sensors"
test_page "$BASE_URL/products/rogowski-coils/index.html" "200" "Rogowski Coils"

# Test solution pages
echo
echo "3. Testing solution pages:"
test_page "$BASE_URL/solutions/bms/index.html" "200" "BMS Solution"
test_page "$BASE_URL/solutions/solar-inverters/index.html" "200" "Solar Inverters Solution"
test_page "$BASE_URL/solutions/servo-drives/index.html" "200" "Servo Drives Solution"
test_page "$BASE_URL/solutions/dc-charging/index.html" "200" "DC Charging Solution"
test_page "$BASE_URL/solutions/rail-traction/index.html" "200" "Rail Traction Solution"

# Test support and news sub-pages
echo
echo "4. Testing support and news sub-pages:"
test_page "$BASE_URL/support/technical-articles/index.html" "200" "Technical Articles"
test_page "$BASE_URL/support/technical-articles/hall-effect-comparison.html" "200" "Hall Effect Article"
test_page "$BASE_URL/support/fae/zhang-engineer.html" "200" "FAE Profile"
test_page "$BASE_URL/news/lem-news/index.html" "200" "Company News"
test_page "$BASE_URL/news/lem-news/hoc-150-s-release.html" "200" "News Article"

# Check for essential elements on the homepage
echo
echo "5. Checking essential elements on homepage:"
check_elements "$BASE_URL/index.html" \
    "LEM代理商_授权一级LEM传感器代理_力通电子" \
    "力通是LEM(莱姆)官方授权一级代理商" \
    "全球电量测量专家 - LEM代理商" \
    "探索产品" \
    "联系技术支持" \
    "src/css/style.css" \
    "src/js/main.js"

# Check for essential elements on products page
echo
echo "6. Checking essential elements on products page:"
check_elements "$BASE_URL/products/index.html" \
    "LEM传感器产品中心" \
    "霍尔电流传感器" \
    "电压传感器" \
    "高精度传感器" \
    "汽车级传感器" \
    "罗氏线圈"

# Check for essential elements on solutions page
echo
echo "7. Checking essential elements on solutions page:"
check_elements "$BASE_URL/solutions/index.html" \
    "行业解决方案" \
    "电动汽车BMS" \
    "光伏逆变器" \
    "伺服驱动器" \
    "直流充电桩" \
    "铁路牵引"

# Check for sitemap and robots.txt
echo
echo "8. Checking for sitemap and robots.txt:"
test_page "$BASE_URL/sitemap.xml" "200" "Sitemap"
test_page "$BASE_URL/robots.txt" "200" "Robots.txt"

# Check for CSS and JS resources
echo
echo "9. Checking for essential resources:"
test_page "$BASE_URL/src/css/style.css" "200" "Main CSS"
test_page "$BASE_URL/src/js/main.js" "200" "Main JS"

echo
echo "==================================="
echo "Testing completed!"
echo "==================================="
echo "Please review the results above."
echo "For a complete test, also run Lighthouse/Chrome DevTools tests."