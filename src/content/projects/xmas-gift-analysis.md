<h1 align="center">🎄 Xmas Gift Analysis 🎁</h1>

<p align="center">📊 SQL analysis of Christmas-season sales performance, customer behavior, products, locations, and purchase channels.</p>

<hr>

<h2 align="center">📌 Project Overview</h2>

<h3 align="center">🎯 About the Project</h3>

<p><strong>👩‍💻 Author Name:</strong> Annie Nguyen</p>

<p><strong>📝 Project Description:</strong>
In this project, I use SQL to analyze sales data across different Christmas seasons. The analysis is designed to understand sales performance, revenue growth, customer segments, product performance, purchase channels, payment methods, and geographic patterns.</p>

<h3 align="center">🛠️ Tools &amp; Technologies</h3>

<p align="center">
	<a href="https://www.microsoft.com/en-us/sql-server"><img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&amp;logo=microsoftsqlserver&amp;logoColor=white" alt="Microsoft SQL Server"></a>
	<a href="https://www.microsoft.com/en-us/microsoft-365/excel"><img src="https://img.shields.io/badge/Microsoft%20Excel-217346?style=for-the-badge&amp;logo=microsoftexcel&amp;logoColor=white" alt="Microsoft Excel"></a>
	<a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&amp;logo=visualstudiocode&amp;logoColor=white" alt="Visual Studio Code"></a>
	<a href="https://github.com/"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub"></a>
</p>

<h3 align="center">📂 Dataset</h3>

<ul>
	<li><strong>📥 Resource:</strong> <a href="xmas-dataset.xlsx">xmas-dataset.xlsx</a></li>
	<li><strong>📏 Data size:</strong> 41,163 records</li>
	<li><strong>💾 Database backup:</strong> <a href="fp20c12.bak">fp20c12.bak</a></li>
	<li><strong>📖 Data dictionary:</strong> <a href="data-dictionary.xlsx">data-dictionary.xlsx</a></li>
</ul>

<h3 align="center">🗂️ Data Schema</h3>

<p>The analysis uses the following tables in the <code>fp20c12</code> database:</p>

<table>
	<thead>
		<tr>
			<th>Table</th>
			<th>Description</th>
			<th>Records</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>dbo.country</code></td>
			<td>List of countries used in the sales data.</td>
			<td>10 rows</td>
		</tr>
		<tr>
			<td><code>dbo.purchase_type</code></td>
			<td>Purchase channel reference table.</td>
			<td>3 rows</td>
		</tr>
		<tr>
			<td><code>dbo.xmas_sales</code></td>
			<td>Sales transactions across Christmas seasons.</td>
			<td>41,163 rows</td>
		</tr>
		<tr>
			<td><code>dbo.v_xmas_sales</code></td>
			<td>Analytical view with Christmas season, date, weekday, and hour fields.</td>
			<td>Derived view</td>
		</tr>
	</tbody>
</table>

<p>Key dimensions include time, country, city, customer age range, gender, product category, product name, purchase type, payment method, and Christmas budget. Key measures include total sales, quantity, cost, and profit.</p>

<h2 align="center">🔍 Analyzing Steps</h2>

<ol>
	<li>🗃️ Explore tables in the database system.</li>
	<li>🧭 Explore the analytical approach across time, place, customer, product, and purchase dimensions.</li>
	<li>🧮 Calculate revenue, sales quantity, order quantity, cost, profit, and year-over-year growth.</li>
	<li>🧱 Create the analytical view <code>dbo.v_xmas_sales</code>.</li>
	<li>💡 Answer business questions using SQL.</li>
	<li>📈 Interpret results and develop recommendations.</li>
</ol>

<h2 align="center">❓ Business Questions</h2>

<p>The analysis addresses ten business questions covering seasonal performance, growth, markets, customers, products, and purchasing behavior. Each question includes the SQL used to answer it and the corresponding result screenshot.</p>

<details>
	<summary><strong>📊 Question 1: How did overall sales performance change across Christmas seasons?</strong></summary>
	<p>Compare revenue, quantity sold, cost, and profit across completed Christmas seasons to evaluate overall performance and identify stronger or weaker seasons. The incomplete 2017-2018 season is excluded.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>; WITH s AS
(SELECT xmas_season, SUM(total_sales) AS revenue, SUM(quantity) AS qty_sold, SUM(cost) AS cost, SUM(profit) AS profit
FROM dbo.v_xmas_sales
WHERE xmas_year &lt;&gt; 2017
GROUP BY xmas_season
)
SELECT xmas_season,
    ROUND(qty_sold/(POWER(10,3)),1) AS qty_sold,
    ROUND(revenue/(POWER(10,6)),2) AS revenue,
    ROUND(cost/(POWER(10,6)), 2) AS cost,
    ROUND(profit/(POWER(10,6)), 2) AS profit
FROM s
ORDER BY xmas_season</code></pre>
	<h4 align="center">🖼️ Result</h4>
	<p><strong>File:</strong> <code>query results/q1-sales-performance.png</code></p>
	<img src="query%20results/q1-sales-performance.png" alt="Question 1 sales performance result" width="800">
</details>

<details>
	<summary><strong>📈 Question 2: Did the latest Christmas season outperform the previous season?</strong></summary>
	<p>Compare the latest season with the previous season using percentage changes in revenue, quantity sold, cost, and profit. This shows whether recent growth was both commercially successful and profitable.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>; WITH s AS
(SELECT xmas_season, xmas_year, SUM(total_sales) AS revenue, SUM(quantity) AS qty_sold, SUM(cost) AS cost, SUM(profit) AS profit
FROM dbo.v_xmas_sales
WHERE xmas_year &lt;&gt; 2017
GROUP BY xmas_season, xmas_year
), t AS (
SELECT xmas_season, xmas_year,
    ROUND(qty_sold/(POWER(10,3)),1) AS qty_sold,
    ROUND(revenue/(POWER(10,6)),2) AS revenue,
    ROUND(cost/(POWER(10,6)), 2) AS cost,
    ROUND(profit/(POWER(10,6)), 2) AS profit
FROM s  
)
SELECT cs.xmas_season, 
    ROUND((cs.qty_sold - ps.qty_sold) * 100.0 / NULLIF(ps.qty_sold, 0), 2) AS qty_sold_growth_pct,
    ROUND((cs.revenue - ps.revenue) * 100.0 / NULLIF(ps.revenue, 0), 2) AS revenue_growth_pct, 
    ROUND((cs.cost - ps.cost) * 100.0 / NULLIF(ps.cost, 0), 2) AS cost_growth_pct, 
    ROUND((cs.profit - ps.profit) * 100.0 / NULLIF(ps.profit, 0), 2) AS profit_growth_pct
FROM t AS cs
JOIN t AS ps
    ON ps.xmas_year = cs.xmas_year - 1
WHERE cs.xmas_year = (SELECT MAX(xmas_year) FROM t); </code></pre>
	<h4 align="center">🖼️ Result</h4>
	<p><strong>File:</strong> <code>query results/q2-lastest-growth.png</code></p>
	<img src="query%20results/q2-lastest-growth.png" alt="Question 2 latest growth result" width="800">
</details>

<details>
	<summary><strong>📉 Question 3: What is the year-over-year revenue trend across Christmas seasons?</strong></summary>
	<p>Measure the absolute and percentage change in revenue from one season to the next to identify sustained growth, slowdowns, or declines over time.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>; WITH s AS
(
    SELECT xmas_season, xmas_year, SUM(total_sales) AS revenue
    FROM dbo.v_xmas_sales
    WHERE xmas_year &lt;&gt; 2017
    GROUP BY xmas_season, xmas_year
)
SELECT cs.xmas_season,
       ROUND(cs.revenue / (POWER(10,6)) - ps.revenue / (POWER(10,6)), 2) AS revenue_growth,
       ROUND(((cs.revenue - ps.revenue) * 100.0) / NULLIF(ps.revenue, 0), 2) AS revenue_growth_pct
FROM s AS cs
LEFT JOIN s AS ps
    ON ps.xmas_year = cs.xmas_year - 1
ORDER BY cs.xmas_season;</code></pre>
	<h4 align="center">🖼️ Result</h4>
	<p><strong>File:</strong> <code>query results/q3-revenue-growth.png</code></p>
	<img src="query%20results/q3-revenue-growth.png" alt="Question 3 revenue growth result" width="800">
</details>

<details>
	<summary><strong>🛒 Question 4: Which purchase channels contribute the most revenue each season?</strong></summary>
	<p>Calculate the revenue and seasonal revenue share of each purchase type to understand channel performance and how customer channel preferences change over time.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>; WITH s AS 
(
    SELECT xmas_season, purchase_type, SUM(total_sales) AS revenue_by_purchase_type
    FROM dbo.v_xmas_sales
    GROUP BY xmas_season, purchase_type
), 
t AS 
( 
    SELECT xmas_season, SUM(total_sales) AS total_revenue
    FROM dbo.v_xmas_sales
    GROUP BY xmas_season
)
SELECT s.xmas_season, 
    s.purchase_type,
    ROUND(s.revenue_by_purchase_type/POWER(10,6),2) AS revenue_by_purchase_type, 
    ROUND(t.total_revenue/POWER(10,6),2) AS total_revenue,
    ROUND(s.revenue_by_purchase_type * 100.0 / NULLIF(t.total_revenue,0), 2) AS revenue_share_pct
FROM s
JOIN t 
    ON s.xmas_season = t.xmas_season
ORDER BY xmas_season, purchase_type</code></pre>
	<h4 align="center">🖼️ Result</h4>
	<p><strong>File:</strong> <code>query results/q4-purchase-type-performance.png</code></p>
	<img src="query%20results/q4-purchase-type-performance.png" alt="Question 4 purchase type performance result" width="800">
</details>

<details>
	<summary><strong>🌍 Question 5: Which countries and cities generate the most revenue?</strong></summary>
	<p>Rank geographic markets by revenue to identify the strongest locations for inventory allocation, marketing investment, and sales planning.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>-- revenue by country
WITH s AS 
(
    SELECT country, SUM(total_sales) AS revenue
    FROM dbo.v_xmas_sales
    GROUP BY country
)
SELECT country, 
    ROUND(revenue/POWER(10,6),2) AS revenue
FROM s
ORDER BY revenue DESC

-- revenue by city
WITH s AS
(
SELECT country, city, SUM(total_sales) AS revenue
FROM dbo.v_xmas_sales
GROUP BY country, city
)
SELECT country, city,
ROUND(revenue/POWER(10,6),2) AS revenue
FROM s
ORDER BY revenue DESC</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>Country view:</strong> <code>query results/q5.1-country-performance.png</code></p>
<img src="query%20results/q5.1-country-performance.png" alt="Question 5 country performance result" width="800">
<p><strong>City view:</strong> <code>query results/q5.2-city-performance.png</code></p>
<img src="query%20results/q5.2-city-performance.png" alt="Question 5 city performance result" width="800">

</details>

<details>
	<summary><strong>🏆 Question 6: Which countries lead in current revenue and revenue growth?</strong></summary>
	<p>Rank countries by revenue and year-over-year revenue growth in the latest season. This distinguishes established high-value markets from faster-growing opportunities.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>-- rank countries by highest revenue
; WITH s AS 
(
    SELECT xmas_season, xmas_year,country, SUM(total_sales) AS revenue
    FROM dbo.v_xmas_sales
    GROUP BY xmas_season, xmas_year, country
)
SELECT country, 
    ROUND(revenue/POWER(10,6),2) AS revenue, 
    RANK() OVER (ORDER BY revenue DESC) AS revenue_rank
FROM s
WHERE s.xmas_year = (SELECT MAX(xmas_year) FROM dbo.v_xmas_sales)

-- rank countries by highest revenue growth percentage
; WITH s AS
(
SELECT country, xmas_season, xmas_year, SUM(total_sales) AS revenue
FROM dbo.v_xmas_sales
WHERE xmas_year <> 2017
GROUP BY country, xmas_season, xmas_year
),
t AS
(SELECT
cs.country,
ROUND(cs.revenue / POWER(10,6), 2) AS revenue,
ROUND((cs.revenue - ps.revenue) / POWER(10,6), 2) AS revenue_growth,
ROUND(((cs.revenue - ps.revenue) * 100.0) / NULLIF(ps.revenue, 0), 2) AS revenue_growth_pct
FROM s AS cs
LEFT JOIN s AS ps
ON ps.country = cs.country
AND ps.xmas_year = cs.xmas_year - 1
WHERE cs.xmas_year = (SELECT MAX(xmas_year) FROM dbo.v_xmas_sales)
)
SELECT t.country,
t.revenue,
t.revenue_growth,
t.revenue_growth_pct,
RANK() OVER (ORDER BY t.revenue_growth_pct DESC) AS rank_by_revenue_growth_pct
FROM t;</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>Revenue ranking:</strong> <code>query results/q6.1-country-ranking-by-revenue.png</code></p>
<img src="query%20results/q6.1-country-ranking-by-revenue.png" alt="Question 6 country ranking by revenue result" width="800">
<p><strong>Revenue growth ranking:</strong> <code>query results/q6.2-country-ranking-by-revenue-growth.png</code></p>
<img src="query%20results/q6.2-country-ranking-by-revenue-growth.png" alt="Question 6 country ranking by revenue growth result" width="800">

</details>

<details>
	<summary><strong>👥 Question 7: Which customer segments and purchase channels generate the most revenue?</strong></summary>
	<p>Compare revenue across age groups, genders, and purchase types to identify the customer segments and channels with the greatest commercial value.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>-- by age group
SELECT customer_age_tange AS customer_age_range,
    ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY customer_age_tange

-- by gender
SELECT gender,
ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY gender

-- by purchase channel
SELECT purchase_type,
ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY purchase_type</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>By age group:</strong> <code>query results/q7.1-revenue-by-age-group.png</code></p>
<img src="query%20results/q7.1-revenue-by-age-group.png" alt="Question 7 revenue by age group result" width="800">
<p><strong>By gender:</strong> <code>query results/q7.2-revenue-by-gender.png</code></p>
<img src="query%20results/q7.2-revenue-by-gender.png" alt="Question 7 revenue by gender result" width="800">
<p><strong>By purchase channel:</strong> <code>query results/q7.3-revenue-by-purchase-type.png</code></p>
<img src="query%20results/q7.3-revenue-by-purchase-type.png" alt="Question 7 revenue by purchase type result" width="800">

</details>

<details>
	<summary><strong>💳 Question 8: How do channel and payment preferences differ by age group?</strong></summary>
	<p>Measure the revenue share of purchase types and payment methods within each age group to support age-specific marketing, checkout, and channel strategies.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>; WITH s AS 
(
    SELECT customer_age_tange AS customer_age_range,
    ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY customer_age_tange
), t AS
(
    SELECT customer_age_tange AS customer_age_range, 
    purchase_type,
    ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue_by_purchase_type
    FROM dbo.v_xmas_sales
    GROUP BY customer_age_tange, purchase_type
)
SELECT t.customer_age_range,
    t.purchase_type,
    t.revenue_by_purchase_type,
    ROUND(t.revenue_by_purchase_type / s.revenue *100 , 2) AS revenue_share_by_purchase_type
FROM t
JOIN s ON t.customer_age_range = s.customer_age_range
ORDER BY t.customer_age_range;

-- payment method share within age group
; WITH s AS
(
SELECT customer_age_tange AS customer_age_range,
SUM(total_sales) AS revenue
FROM dbo.v_xmas_sales
GROUP BY customer_age_tange
),
t AS
(
SELECT customer_age_tange AS customer_age_range,
payment_method,
SUM(total_sales) AS revenue_by_payment_method
FROM dbo.v_xmas_sales
GROUP BY customer_age_tange, payment_method
)
SELECT t.customer_age_range,
t.payment_method,
ROUND(t.revenue_by_payment_method / POWER(10,6), 2) AS revenue_by_payment_method,
ROUND(t.revenue_by_payment_method * 100.0 / NULLIF(s.revenue, 0), 2) AS revenue_share_by_payment_method
FROM t
JOIN s
ON t.customer_age_range = s.customer_age_range
ORDER BY t.customer_age_range, t.payment_method;</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>Purchase type within age groups:</strong> <code>query results/q8.1-revenue-share-by-purchase-type-for-age-group.png</code></p>
<img src="query%20results/q8.1-revenue-share-by-purchase-type-for-age-group.png" alt="Question 8 purchase type revenue share by age group result" width="800">
<p><strong>Payment method within age groups:</strong> <code>query results/q8.2-revenue-share-by-paymen-method-for-age-group.png</code></p>
<img src="query%20results/q8.2-revenue-share-by-paymen-method-for-age-group.png" alt="Question 8 payment method revenue share by age group result" width="800">

</details>

<details>
	<summary><strong>🎁 Question 9: Which product categories and products generate the most revenue?</strong></summary>
	<p>Rank product categories and individual products by revenue to identify the strongest merchandise and guide assortment, promotion, and inventory decisions.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>-- analysis by product category
SELECT product_category,
    ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY product_category
ORDER BY revenue DESC

-- analysis by product
SELECT product_category, product_name,
ROUND(SUM(total_sales)/POWER(10,6),2) AS revenue
FROM dbo.v_xmas_sales
GROUP BY product_category, product_name
ORDER BY product_category, revenue DESC</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>By product category:</strong> <code>query results/q9.1-revenue-by-product-category.png</code></p>
<img src="query%20results/q9.1-revenue-by-product-category.png" alt="Question 9 revenue by product category result" width="800">
<p><strong>By product type:</strong> <code>query results/q9.2-revenue-by-product-type.png</code></p>
<img src="query%20results/q9.2-revenue-by-product-type.png" alt="Question 9 revenue by product type result" width="800">

</details>

<details>
	<summary><strong>🕒 Question 10: When do customers make the most purchases?</strong></summary>
	<p>Analyze order volume by weekday, gender, and hour of day to identify peak purchasing periods and support staffing, promotion timing, and operational planning.</p>
	<h4 align="center">💻 SQL Query</h4>
	<pre align="left"><code>-- On which days of the week do male and female customers typically make purchases?
SELECT gender,
    DATEPART(WEEKDAY, [date]) AS weekday,
    COUNT(*) AS nb_orders
FROM dbo.xmas_sales
GROUP BY gender, DATEPART(WEEKDAY, [date])
ORDER BY gender, weekday

-- At what times of day do customers typically make purchases?
SELECT DATEPART(HOUR, [time]) AS [hour],
COUNT(*) AS nb_orders
FROM dbo.xmas_sales
GROUP BY DATEPART(HOUR, [time])
ORDER BY [hour]</code></pre>
<h4 align="center">🖼️ Result</h4>
<p><strong>By day of week:</strong> <code>query results/q10.1-days-of-week-performance.png</code></p>
<img src="query%20results/q10.1-days-of-week-performance.png" alt="Question 10 days of week performance result" width="800">
<p><strong>By hour of day:</strong> <code>query results/q10.2-hours-performance.png</code></p>
<img src="query%20results/q10.2-hours-performance.png" alt="Question 10 hourly performance result" width="800">

</details>
<h2 align="center">💡 Key Findings &amp; Recommendations</h2>

<p>This section will summarize the main patterns discovered from the completed SQL analysis and translate them into recommendations for sales planning, inventory management, marketing, and channel strategy.</p>

<ul>
	<li>📊 Compare revenue, quantity, cost, and profit trends across Christmas seasons.</li>
	<li>🎯 Prioritize the strongest countries, cities, products, and purchase channels.</li>
	<li>👥 Use customer age and gender patterns to support targeted campaigns.</li>
	<li>📅 Align staffing, promotions, and inventory with peak purchase days and hours.</li>
</ul>

<h2 align="center">✅ Conclusion</h2>

<p>This project demonstrates how SQL can transform transaction-level Christmas sales data into useful business insights. The analysis provides a structured view of performance over time and highlights opportunities to improve product, customer, geographic, and channel decisions.</p>

<h2 align="center">📬 Contact Information</h2>

<p align="center"><strong>👩‍💻 Annie Nguyen</strong></p>

<p align="center">
	<a href="https://github.com/annienguyentech">🐙 GitHub Profile</a><br>
	<a href="https://www.linkedin.com/in/minh-thu-annie-nguyen/">💼 LinkedIn Profile</a>
</p>