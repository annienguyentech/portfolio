import { CaseStudy } from "../components/CaseStudy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects_/$slug")({
  component: ProjectDetailsPage,
  head: () => ({
    meta: [
      {
        title: "Project Details | Annie Nguyen",
      },
      {
        name: "description",
        content:
          "Detailed data analytics and business intelligence project case studies by Annie Nguyen.",
      },
      {
        property: "og:title",
        content: "Project Details | Annie Nguyen",
      },
      {
        property: "og:description",
        content:
          "Detailed data analytics and business intelligence project case studies by Annie Nguyen.",
      },
    ],
  }),
});

interface ProjectDetails {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  objectives: string[];
  process: string[];
  results: string[];
  tools: string[];
  repositoryUrl?: string;
}

const projectDetails: Record<string, ProjectDetails> = {
  "customer-behavior-and-segmentation-analysis": {
    title: "Customer Behavior and Segmentation Analysis",
    category: "Power BI and Customer Analytics",
    summary:
      "An interactive Power BI dashboard exploring purchasing behavior through Recency, Frequency, and Monetary value.",
    challenge: "Organize customer behavior into meaningful segments to support business decisions.",
    objectives: ["Compare customer behavior across RFM segments."],
    process: [
      "Analyzed customer purchasing behavior and presented segment comparisons in Power BI.",
    ],
    results: [
      "Created a dashboard for exploring customer segments and their contribution to performance.",
    ],
    tools: ["Power BI", "DAX", "Power Query", "RFM Analysis"],
  },
  "xmas-gift-analysis": {
    title: "Xmas Gift Analysis",
    category: "SQL and Business Analysis Project",
    summary:
      "A SQL analysis of 41,163 Christmas-season sales transactions that evaluates seasonal growth, geographic markets, customer behavior, product performance, purchase channels, payment preferences, and peak shopping periods.",
    challenge:
      "Transaction-level Christmas sales data contained useful but disconnected dimensions across time, location, customers, products, and purchasing behavior. The goal was to organize the data for analysis and turn the results into practical recommendations for sales planning, inventory, staffing, and channel strategy.",
    objectives: [
      "Evaluate revenue, quantity sold, cost, and profit across Christmas seasons.",
      "Measure the latest season’s revenue and profit growth against the prior season.",
      "Identify high-value countries, cities, product categories, and products.",
      "Compare revenue across customer age groups, gender, purchase channels, and payment methods.",
      "Identify peak shopping days and hours to inform operations and promotions.",
    ],
    process: [
      "Explored the database tables, data dictionary, and transaction-level sales fields.",
      "Created the dbo.v_xmas_sales analytical view with Christmas season, date, weekday, and hour fields.",
      "Developed SQL queries for ten business questions across time, market, customer, product, channel, and purchasing dimensions.",
      "Calculated revenue, quantity sold, orders, cost, profit, revenue share, and year-over-year growth metrics.",
      "Interpreted query results and translated the findings into recommendations for inventory, marketing, staffing, and customer experience.",
    ],
    results: [
      "The latest season increased quantity sold by 2.17%, revenue by 2.01%, and profit by 1.87% over the prior season.",
      "In-store purchases generated more than 60% of seasonal revenue, indicating an opportunity to strengthen online and Christmas-market experiences.",
      "Toys and children’s products were the highest-revenue merchandise, with customers ages 1-11 generating the most revenue.",
      "Peak purchasing occurred from 8 AM to 8 PM, with the strongest volume on Sunday, Saturday, Monday, and Tuesday.",
      "Recommended prioritizing high-performing markets, maintaining children’s-product inventory, targeting lower-performing channels, and aligning staffing and promotions with peak demand.",
    ],
    tools: [
      "SQL Server",
      "SQL",
      "SQL Views",
      "Microsoft Excel",
      "Data Analysis",
      "Business Analysis",
      "Data Visualization",
    ],
    repositoryUrl: "https://github.com/annienguyentech/xmas-gift-analysis",
  },

  "revenue-plan-progress-analysis": {
    title: "Revenue Plan Progress Analysis",
    category: "Power BI Business Intelligence Project",
    summary:
      "An interactive Power BI report developed to monitor revenue performance, compare actual results against planned targets, and evaluate performance across stores, products, customers, and promotions.",
    challenge:
      "Management needed a centralized reporting system that connected historical sales activity with revenue targets. The analysis needed to show whether the company was meeting its plan while allowing users to investigate the sources of strong and weak performance.",
    objectives: [
      "Compare actual revenue with planned revenue.",
      "Track monthly and year-to-date plan completion.",
      "Measure current revenue against prior-year performance.",
      "Identify stores, managers, and districts that are ahead of or behind plan.",
      "Evaluate revenue contribution by product, supplier, brand, and category.",
      "Understand how customer groups and promotions influence performance.",
    ],
    process: [
      "Prepared and transformed sales and planning data using Power Query.",
      "Created relationships between sales, sales-plan, date, store, product, customer, and promotion tables.",
      "Developed DAX measures for actual revenue, planned revenue, plan progress, prior-year revenue, year-to-date revenue, and revenue growth.",
      "Designed Overview, Store, Product, and Customer report pages.",
      "Added interactive filters and conditional formatting to support detailed performance analysis.",
    ],
    results: [
      "Created a centralized view of actual and planned revenue performance.",
      "Enabled users to identify stores and business areas that were behind target.",
      "Supported analysis across company, store, product, customer, and promotion levels.",
      "Produced an interactive report that could be shared through Power BI Service.",
    ],
    tools: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Time Intelligence",
      "Conditional Formatting",
    ],
  },

  "kpim-mart-sales-excel-dashboard": {
    title: "KPIM Mart Sales Excel Dashboard",
    category: "Excel Business Analytics Project",
    summary:
      "An interactive Excel dashboard designed to analyze KPIM Mart sales performance, revenue targets, customer segments, products, stores, and gross profit.",
    challenge:
      "KPIM Mart had sales information distributed across multiple business areas, including transactions, customers, stores, products, promotions, and revenue plans. Management needed one dashboard that could summarize performance and support interactive analysis.",
    objectives: [
      "Monitor total revenue, gross profit, and quantity sold.",
      "Compare actual revenue with planned revenue targets.",
      "Measure year-over-year revenue growth.",
      "Identify monthly and seasonal sales patterns.",
      "Compare performance across stores, managers, and districts.",
      "Analyze customer behavior and product-category contribution.",
    ],
    process: [
      "Prepared and organized data covering sales, customers, products, stores, promotions, and revenue plans.",
      "Applied data-cleaning and transformation techniques within Excel.",
      "Created PivotTables and calculated fields for key performance indicators.",
      "Designed nine dashboard charts covering revenue, customers, products, stores, and growth.",
      "Added slicers for year, gender, occupation, and age group.",
    ],
    results: [
      "Analyzed 58,414 sales transactions from January 2020 through December 2022.",
      "Covered 18,484 customers, 353 products, 29 stores, and 16 promotion programs.",
      "Created an interactive dashboard containing nine charts and multiple performance indicators.",
      "Enabled management to compare actual revenue, targets, historical results, and business segments.",
    ],
    tools: [
      "Microsoft Excel",
      "Power Query",
      "PivotTables",
      "PivotCharts",
      "Slicers",
      "Dashboard Design",
    ],
  },

  "online-course-completion-analysis": {
    title: "Online Course Completion Analysis",
    category: "Descriptive Analytics Project",
    summary:
      "A descriptive analysis examining the learner and course characteristics associated with online-course completion.",
    challenge:
      "Online learning programs need to understand why some learners complete courses while others withdraw. The project examined multiple learner and course characteristics to identify patterns that could support course design and student-success decisions.",
    objectives: [
      "Compare completion outcomes across course-difficulty levels.",
      "Examine whether module length is related to course completion.",
      "Analyze completion patterns across learner age groups.",
      "Compare outcomes by education level.",
      "Translate descriptive findings into recommendations for course design and learner support.",
    ],
    process: [
      "Reviewed the dataset structure and checked the quality of relevant variables.",
      "Grouped learners by completion status, age, and education level.",
      "Compared completion behavior across course difficulty and module length.",
      "Created visual summaries to communicate patterns clearly.",
      "Interpreted the findings from an educational and business perspective.",
    ],
    results: [
      "Identified course and learner characteristics associated with different completion patterns.",
      "Created an organized comparison of completion behavior across demographic and course-design variables.",
      "Developed insights that could support more targeted learner assistance.",
      "Connected descriptive analysis with recommendations for improving course structure and student success.",
    ],
    tools: [
      "Data Cleaning",
      "Descriptive Analytics",
      "Data Visualization",
      "Segmentation",
      "Education Analytics",
      "Business Communication",
    ],
  },

  "sales-optimization-analysis": {
    title: "Sales Optimization Analysis",
    category: "SQL and Database Management Project",
    summary:
      "A relational database and SQL analysis project focused on holiday airline ticket sales, customer activity, route demand, capacity utilization, and coupon strategy.",
    challenge:
      "The airline sales data was distributed across multiple datasets and required a structured relational model before meaningful analysis could be completed. The main business challenge was identifying routes with unused capacity and determining how targeted promotions could improve performance.",
    objectives: [
      "Create a relational database for airline sales analysis.",
      "Clean and organize holiday ticket-sales data.",
      "Design an entity relationship diagram for the database.",
      "Analyze demand and capacity at the route level.",
      "Evaluate customer, flight, route, ticket, and coupon activity.",
      "Recommend strategies for improving underperforming routes.",
    ],
    process: [
      "Cleaned and standardized more than 10 holiday ticket-sales datasets.",
      "Designed an entity relationship diagram connecting routes, flights, customers, ticket sales, and coupons.",
      "Created relational tables and database relationships.",
      "Developed SQL queries to examine ticket sales, route demand, capacity, and promotional activity.",
      "Translated query results into pricing and coupon recommendations.",
    ],
    results: [
      "Created a structured relational database for airline sales reporting.",
      "Identified route-level differences between demand and available capacity.",
      "Highlighted underfilled routes that could benefit from targeted promotions.",
      "Proposed coupon strategies associated with a potential 15% improvement in profitability.",
    ],
    tools: ["SQL", "SQL Server", "Database Design", "ERD", "Data Cleaning", "Business Analysis"],
  },

  "marketing-campaign-response-prediction": {
    title: "Marketing Campaign Response Prediction",
    category: "Python Machine Learning Project",
    summary:
      "A classification project using customer demographics, income, spending behavior, and campaign type to estimate the probability that a customer will respond to a marketing campaign.",
    challenge:
      "Positive campaign responses represented a smaller portion of the dataset than non-responses. A model focused only on overall accuracy could appear successful while failing to identify any actual responders.",
    objectives: [
      "Explore customer demographic and behavioral characteristics.",
      "Compare campaign responses across campaign types.",
      "Build a classification model for campaign-response prediction.",
      "Address imbalance between responders and non-responders.",
      "Generate response probabilities for new customers.",
      "Rank customers for more focused marketing outreach.",
    ],
    process: [
      "Inspected the dataset and removed an unnecessary index column.",
      "Encoded gender and campaign-type variables.",
      "Split the dataset into stratified training and testing samples.",
      "Standardized age, annual income, and spending score.",
      "Trained a logistic regression model using balanced class weights.",
      "Evaluated the model with a confusion matrix, precision, recall, F1-score, and accuracy.",
      "Generated response probabilities and ranked new customers.",
    ],
    results: [
      "Built a balanced baseline model that identified both responders and non-responders.",
      "Achieved approximately 56.7% testing accuracy.",
      "Achieved approximately 41.2% recall for the positive-response class.",
      "Demonstrated why accuracy alone can be misleading for imbalanced classification problems.",
      "Created a process for ranking customers according to predicted response probability.",
    ],
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Logistic Regression",
      "Matplotlib",
      "Data Preprocessing",
    ],
  },
};

function ProjectDetailsPage() {
  const { slug } = Route.useParams();
  return <CaseStudy slug={slug} project={projectDetails[slug]} />;
}
