// Public-facing summaries of Delivered work from the Notion Engineering Evidence DB.
// Keep internal links, diagrams, sensitive configuration and unverified metrics private.
// The source Career DB remains the authority for updates to scope and ownership.
export const platformCaseStudies = [
  {
    id: "aws-platform",
    title: "AWS Platform Migration & ECS Modernisation",
    company: "Receipt Jar",
    domain: "Cloud infrastructure / IaC",
    challenge:
      "Application workloads and infrastructure definitions were distributed across AWS accounts and service repositories.",
    contribution:
      "Contributed hands-on to cross-account migration of workloads and dependencies, consolidated AWS definitions into a dedicated Pulumi repository, and helped move selected ECS workloads from Fargate to EC2-backed capacity.",
    outcome:
      "Made infrastructure changes more repeatable and reviewable while improving ECS hosting cost efficiency.",
    stack: ["AWS ECS", "Pulumi", "IAM", "Docker / ECR", "CloudWatch"],
  },
  {
    id: "release-platform",
    title: "CI/CD & Cross-Service Staging Validation",
    company: "Receipt Jar",
    domain: "Delivery automation / Reliability",
    challenge:
      "Unit-level checks alone could not validate releases across backend services, databases and cloud dependencies.",
    contribution:
      "Built GitHub Actions workflows and repeatable staging checks, covering application tests, container image delivery and infrastructure changes across relevant systems.",
    outcome:
      "Improved release traceability and established reusable pre-production validation across service boundaries.",
    stack: ["GitHub Actions", "AWS ECS", "Docker / ECR", "Pulumi"],
  },
  {
    id: "snowflake-governance",
    title: "Snowflake Infrastructure & Access Governance",
    company: "Receipt Jar",
    domain: "Data platform / Security & governance",
    challenge:
      "Manual platform administration and disconnected scripts made configuration, permissions and cost oversight harder to manage consistently.",
    contribution:
      "Designed a separate Pulumi-managed Snowflake IaC repository for provisioning, roles and grants, service identities, masking policies and resource monitors.",
    outcome:
      "Made platform configuration and access changes more consistent and reviewable, with clearer warehouse consumption visibility.",
    stack: ["Snowflake", "Pulumi", "RBAC", "GitHub Actions"],
  },
  {
    id: "data-quality-gates",
    title: "Data Platform CI Quality Gates",
    company: "Receipt Jar",
    domain: "Platform reliability / CI/CD",
    challenge:
      "Regressions in a dependency graph of more than 200 dbt models could affect scheduled customer data delivery.",
    contribution:
      "Designed targeted reduced-data validation that preserved meaningful downstream dependencies and wired dbt Cloud execution into required GitHub pull-request checks.",
    outcome:
      "Caught model and SQL regressions before merge instead of relying only on developers' local validation.",
    stack: ["dbt", "Snowflake", "GitHub Actions", "dbt Cloud"],
  },
];
