<h1 align="center">RFM Customer Segmentation Analysis</h1>

<p align="center">
  An interactive Power BI dashboard for analyzing customer purchasing behavior through Recency, Frequency, and Monetary value.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Power%20BI-Data%20Visualization-F2C811?logo=powerbi&logoColor=black" alt="Power BI">
  <img src="https://img.shields.io/badge/DAX-Data%20Analysis-0078D4" alt="DAX">
  <img src="https://img.shields.io/badge/Power%20Query-Data%20Transformation-217346" alt="Power Query">
  <img src="https://img.shields.io/badge/Customer-Segmentation-6F42C1" alt="Customer Segmentation">
</p>

<p align="center">
  <a href="https://app.powerbi.com/view?r=eyJrIjoiMWMxMTg3ZGYtYzE3OC00NzA5LTg5MjAtNjMyYmQzN2JkYzE2IiwidCI6IjJiYTMzNDA3LTVjY2MtNDk0MC1iZDE2LWFlMTU0ZjA0YzNjYSIsImMiOjZ9">
    <img src="https://img.shields.io/badge/View%20Live%20Dashboard-Open%20Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="View Live Dashboard">
  </a>
</p>

<p align="center">
  Created by <strong>Annie Nguyen</strong>
</p>

---

<h2 align="center">Project Overview</h2>

The **RFM Customer Segmentation Analysis** project uses Power BI to evaluate customer purchasing behavior and group customers into meaningful business segments.

The analysis is based on three customer behavior dimensions:

* **Recency:** How recently a customer completed a purchase
* **Frequency:** How often a customer completed purchases
* **Monetary Value:** How much revenue a customer generated

By combining these measurements, the dashboard helps identify valuable, loyal, promising, inactive, and at-risk customers. These insights can support customer retention, targeted marketing, personalized promotions, and more efficient resource allocation.

---

<h2 align="center">Business Objectives</h2>

This project was developed to help answer the following business questions:

1. Who are the organization's most valuable customers?
2. Which customers purchase most frequently?
3. Which customers have purchased most recently?
4. Which customer groups generate the highest revenue?
5. Which customers show signs of becoming inactive?
6. Which segments should receive retention or reactivation campaigns?
7. How can marketing strategies be customized for different customer groups?

---

<h2 align="center">RFM Analysis Framework</h2>

| RFM Dimension      | Measurement                               | Business Interpretation                                           |
| :----------------- | :---------------------------------------- | :---------------------------------------------------------------- |
| **Recency**        | Time since the customer's latest purchase | Customers with recent purchases are generally more engaged        |
| **Frequency**      | Number of completed transactions          | Frequent purchases can indicate customer loyalty                  |
| **Monetary Value** | Total amount spent by the customer        | Higher spending identifies customers with greater financial value |

Each customer is evaluated across these three dimensions. The resulting RFM measurements are combined to classify customers into actionable segments.

---

<h2 align="center">Customer Segmentation</h2>

The dashboard supports the identification of customer groups such as:

| Customer Group           | General Characteristics                                       | Recommended Action                                  |
| :----------------------- | :------------------------------------------------------------ | :-------------------------------------------------- |
| **High-Value Customers** | Recent, frequent, and high-spending customers                 | Provide exclusive benefits and personalized rewards |
| **Loyal Customers**      | Purchase consistently and maintain a strong relationship      | Strengthen loyalty programs and encourage referrals |
| **Potential Loyalists**  | Recently active customers with growing purchase frequency     | Encourage repeat purchases through targeted offers  |
| **At-Risk Customers**    | Previously valuable customers who have not purchased recently | Launch personalized retention campaigns             |
| **Inactive Customers**   | Customers with limited or outdated purchasing activity        | Use re-engagement campaigns and special incentives  |
| **Low-Value Customers**  | Infrequent customers with relatively low spending             | Use cost-efficient promotional strategies           |

---

<h2 align="center">Dashboard Feature</h2>

The interactive Power BI dashboard allows users to:

* Review customer activity using Recency, Frequency, and Monetary metrics
* Compare customer segments and their business value
* Examine the distribution of customers across RFM categories
* Identify high-value and loyal customers
* Detect customers who may be at risk of becoming inactive
* Analyze customer spending and transaction patterns
* Filter the report to investigate specific customer groups
* Interact with charts, slicers, and report visuals
* Translate customer behavior into targeted marketing actions

---

<h2 align="center">Analysis Workflow</h2>

### 1. Data Preparation

Customer and transaction data are reviewed and transformed to ensure that important fields, such as customer identifiers, transaction dates, transaction counts, and sales amounts, are suitable for analysis.

### 2. Data Modeling

The cleaned data are organized into a Power BI data model that supports customer-level calculations and interactive filtering.

### 3. RFM Measurement

Customer behavior is evaluated using:

* The date of the most recent transaction
* The total number of transactions
* The total monetary value of transactions

### 4. Customer Classification

The RFM results are combined to separate customers into groups with different levels of activity, loyalty, and financial value.

### 5. Dashboard Development

Interactive visuals, measures, slicers, and customer segmentation charts are developed in Power BI to communicate the results clearly.

---

<h2 align="center">Tools And Technologies</h2>

| Tool                           | Purpose                                                     |
| :----------------------------- | :---------------------------------------------------------- |
| **Microsoft Power BI Desktop** | Data modeling, analysis, and dashboard development          |
| **Power Query**                | Data cleaning and transformation                            |
| **DAX**                        | Customer metrics, RFM calculations, and analytical measures |
| **Power BI Service**           | Online report publishing and dashboard sharing              |

---


<h2 align="center">Interactive Power BI Dashboard</h2>

<p align="center">
  Click the dashboard preview below to explore the interactive report.
</p>

<p align="center">
  <a href="https://app.powerbi.com/view?r=eyJrIjoiMWMxMTg3ZGYtYzE3OC00NzA5LTg5MjAtNjMyYmQzN2JkYzE2IiwidCI6IjJiYTMzNDA3LTVjY2MtNDk0MC1iZDE2LWFlMTU0ZjA0YzNjYSIsImMiOjZ9">
    <img
      src="images/rfm-dashboard.png"
      alt="RFM Analysis Power BI Dashboard"
      width="900"
    >
  </a>
</p>

<p align="center">
  <a href="https://app.powerbi.com/view?r=eyJrIjoiMWMxMTg3ZGYtYzE3OC00NzA5LTg5MjAtNjMyYmQzN2JkYzE2IiwidCI6IjJiYTMzNDA3LTVjY2MtNDk0MC1iZDE2LWFlMTU0ZjA0YzNjYSIsImMiOjZ9">
    <img
      src="https://img.shields.io/badge/Open%20Interactive%20Dashboard-Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black"
      alt="Open Interactive Power BI Dashboard"
    >
  </a>
</p>


<h2 align="center">How To Explore Dashboard</h2>

1. Open the live Power BI dashboard.
2. Use the available slicers to filter the report.
3. Select a customer segment to update related visuals.
4. Hover over charts to review detailed values.
5. Compare customer groups across RFM dimensions.
6. Reset the filters to return to the complete customer overview.

---

<h2 align="center">Business Application</h2>

The results from this dashboard can support several business strategies:

### Customer Retention

Identify valuable customers whose activity has declined and reach them before they become inactive.

### Personalized Marketing

Develop promotions based on each customer segment's purchase frequency, spending level, and recent activity.

### Loyalty Management

Recognize consistent and high-value customers through loyalty rewards, exclusive benefits, and referral programs.

### Customer Reactivation

Create targeted campaigns for inactive customers using relevant discounts, reminders, or personalized recommendations.

### Marketing Resource Allocation

Prioritize campaigns based on expected customer value rather than applying the same strategy to every customer.

---

<h2 align="center">Skills Demonstrated</h2>

* Business intelligence dashboard development
* Customer segmentation
* RFM analysis
* Data cleaning and transformation
* Data modeling
* DAX measure development
* Interactive data visualization
* Customer behavior analysis
* Marketing analytics
* Business insight communication

---

<h2 align="center">Further Improvement</h2>

Potential extensions of this project include:

* Adding customer lifetime value analysis
* Tracking customer movement between segments over time
* Building a customer churn prediction model
* Measuring campaign performance by customer segment
* Creating product recommendations for each segment
* Adding geographic customer analysis
* Automating scheduled data refreshes
* Comparing customer behavior across different time periods

---

<h2 align="center">Author</h2>

<p align="center">
<strong>Annie Nguyen</strong><br>

Business Analytics and Economics student with interests in data analytics, business intelligence, customer analytics, and data visualization</p>

---

<p align="center">
  <strong>RFM Customer Segmentation Analysis</strong><br>
  Transforming customer transaction data into actionable business strategies
</p>
