import React from "react";
import { FiArrowRight, FiCode } from "react-icons/fi";

const ArchitectureDiagram = ({ sourceTitle, sourceItems, engineItems, targetTitle, targetItems, footerText }) => (
  <div className="mt-12 bg-[#111112] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
    <h4 className="text-[20px] font-semibold text-white mb-8 tracking-tight">Modernization Architecture</h4>
    
    <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6 mb-8">
      {/* Source */}
      <div className="flex-1 bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 relative group hover:border-white/10 transition-colors">
        <h5 className="text-[#8e8c96] font-bold text-sm uppercase tracking-wider mb-4">{sourceTitle}</h5>
        <ul className="flex flex-col gap-3">
          {sourceItems.map((item, i) => (
            <li key={i} className="text-[#c8c5ca] text-[14px] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="hidden lg:flex items-center justify-center shrink-0">
        <FiArrowRight className="text-white/20 text-3xl" />
      </div>
      <div className="flex lg:hidden items-center justify-center py-2">
        <FiArrowRight className="text-white/20 text-3xl rotate-90" />
      </div>

      {/* Engine */}
      <div className="flex-1 bg-gradient-to-b from-[#3A6FF7]/20 to-[#3A6FF7]/5 border border-[#3A6FF7]/20 rounded-2xl p-6 relative group hover:border-[#3A6FF7]/40 transition-colors">
        <h5 className="text-[#3A6FF7] font-bold text-sm uppercase tracking-wider mb-4">Azetworks AI Engine</h5>
        <ul className="flex flex-col gap-3">
          {engineItems.map((item, i) => (
            <li key={i} className="text-white text-[14px] flex items-center gap-2 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3A6FF7]"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <div className="hidden lg:flex items-center justify-center shrink-0">
        <FiArrowRight className="text-[#3A6FF7]/50 text-3xl" />
      </div>
      <div className="flex lg:hidden items-center justify-center py-2">
        <FiArrowRight className="text-[#3A6FF7]/50 text-3xl rotate-90" />
      </div>

      {/* Target */}
      <div className="flex-1 bg-[#1a1a1c] border border-white/5 rounded-2xl p-6 relative group hover:border-[#4A8F8B]/30 transition-colors">
        <h5 className="text-[#4A8F8B] font-bold text-sm uppercase tracking-wider mb-4">{targetTitle}</h5>
        <ul className="flex flex-col gap-3">
          {targetItems.map((item, i) => (
            <li key={i} className="text-[#c8c5ca] text-[14px] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4A8F8B]/50"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="bg-[#151517] rounded-xl p-5 sm:p-6 border border-white/5">
      <p className="text-[14px] sm:text-[15px] text-[#c8c5ca] leading-relaxed">
        <strong className="text-white mr-2">AWS Transform Integration:</strong>
        {footerText}
      </p>
    </div>
  </div>
);

const FeatureGrid = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
    {features.map((feature, idx) => (
      <div key={idx} className="flex flex-col gap-3">
        <h4 className="text-[18px] font-semibold text-white tracking-tight">{feature.title}</h4>
        <p className="text-[16px] leading-[1.6] text-[#8e8c96]">{feature.desc}</p>
      </div>
    ))}
  </div>
);

const MetricsRow = ({ metrics }) => (
  <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 mb-8">
    {metrics.map((metric, idx) => (
      <div key={idx}>
        <div className="text-[40px] sm:text-[48px] font-bold text-white tracking-tighter leading-none mb-2">
          {metric.value}
        </div>
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#3A6FF7] font-semibold mt-2">
          {metric.label}
        </div>
      </div>
    ))}
  </div>
);

const lrtFeatures = [
  { title: "The Mission", desc: "Escape \"dead-end\" languages (VB6, COBOL, PowerBuilder, Delphi) and aging Java/.NET versions by translating legacy logic into modern, maintainable frameworks. LRT preserves business logic while eliminating technical debt, enabling your applications to run on modern cloud infrastructure with contemporary development practices." },
  { title: "The Tech Stack", desc: "Agentic AI Code Mapping: Reads, maps, and rewrites legacy code, extracting core business logic while eliminating redundant \"bloat.\" Uses AST (Abstract Syntax Tree) analysis, pattern recognition, and semantic understanding to preserve intent while modernizing implementation." },
  { title: "Supported Transformations", desc: "VB6 → .NET Core/Java, COBOL → Java/Python, PowerBuilder → Angular/React, Legacy Java → Spring Boot, .NET Framework → .NET 8+. Mainframe to cloud-native transformations included." },
  { title: "Efficiency & Speed", desc: "70% faster translation than traditional manual rewrite approaches. Typical 100K LOC application translates in weeks, not years. Automated testing ensures functional parity throughout." },
  { title: "Quality Assurance", desc: "Automated regression testing, side-by-side validation, and business logic verification. Every transformation includes comprehensive test coverage and documentation." },
  { title: "The Result", desc: "Converts your biggest technical liability into your most agile asset. Legacy debt isn't just reduced—it's retired and replaced with a clean, maintainable foundation. Modern CI/CD pipelines, cloud-native deployment, and developer-friendly codebases." }
];

const dblFeatures = [
  { title: "The Mission", desc: "Eliminate punishing Oracle and SQL Server licensing costs by migrating to high-performance, open-source engines built for the cloud era. DBL handles schema conversion, stored procedure translation, data migration, and application refactoring—ensuring zero business logic loss while dramatically reducing TCO." },
  { title: "The Tech Stack", desc: "Outcome-Based Conversion: Automated schema conversion, stored procedure translation, and data migration tools. Handles complex PL/SQL, T-SQL, triggers, and business logic with AI-assisted refactoring." },
  { title: "Target Platforms", desc: "PostgreSQL, MySQL, MariaDB, Amazon Aurora, Azure Database, Google Cloud SQL. Optimized for cloud-native performance and scalability with managed service integration." },
  { title: "Financial Impact", desc: "Dramatic TCO reduction (typically 60-80% savings), total removal of vendor lock-in, and elimination of audit anxiety. Predictable, consumption-based pricing replaces unpredictable licensing costs." },
  { title: "Migration Approach", desc: "Zero-downtime migrations using continuous replication, automated validation, and rollback capabilities. Phased cutover ensures business continuity throughout the transition." },
  { title: "The Result", desc: "A database layer that scales on your terms and your budget, not your vendor's audit cycle. Modern, cloud-native databases with better performance, lower costs, and complete operational freedom." }
];

const cneFeatures = [
  { title: "The Mission", desc: "Transform rigid monolithic applications into flexible, cloud-native architectures using microservices, containers, and serverless patterns. CNE breaks down tightly-coupled systems into independently deployable services that scale on demand, enabling continuous delivery and true business agility on AWS infrastructure." },
  { title: "The Tech Stack", desc: "AI-Led Decomposition: Automated domain analysis identifies service boundaries, extracts business capabilities, and generates microservice blueprints. Combines AWS App2Container, containerization strategies, and Infrastructure-as-Code (Terraform/CloudFormation) for synchronized application and infrastructure transformation." },
  { title: "Target Architectures", desc: "Microservices on AWS ECS/EKS (Kubernetes), serverless functions on AWS Lambda, event-driven architectures with EventBridge/SNS/SQS. API Gateway for unified service mesh, with observability via CloudWatch and X-Ray." },
  { title: "Deployment Velocity", desc: "Shift from quarterly/monthly release cycles to continuous deployment. Automated CI/CD pipelines with AWS CodePipeline enable multiple deployments per day. Independent service scaling reduces blast radius and accelerates innovation." },
  { title: "Operational Excellence", desc: "Built-in auto-scaling, self-healing infrastructure, and zero-downtime deployments. Container orchestration handles service discovery, load balancing, and health monitoring automatically. Infrastructure costs align with actual usage patterns." },
  { title: "The Result", desc: "An architecture that matches the pace of modern business demands. Teams deploy independently, scale services individually, and respond to market changes in hours instead of months. True cloud-native agility with resilience built in." }
];

const pxoFeatures = [
  { title: "The Mission", desc: "Deliver rapid performance improvements and cost optimization through targeted platform upgrades—no massive rewrites, no multi-year programs. PXO focuses on high-impact, low-risk transformations like migrating Java workloads to AWS Graviton processors, upgrading runtime versions, and optimizing infrastructure configurations for immediate ROI." },
  { title: "The Tech Stack", desc: "Surgical Re-platforming: AI-powered workload profiling identifies optimization opportunities. Automated compatibility testing, performance benchmarking, and IaC-driven deployment to ARM-based AWS Graviton instances. Runtime modernization for Java, .NET, Node.js, and Python applications." },
  { title: "Target Platforms", desc: "AWS Graviton2/Graviton3 processors (ARM architecture), latest JDK versions (Java 17/21), .NET 8+, Node.js LTS, Python 3.11+. Optimized for EC2, ECS, EKS, Lambda, and RDS workloads with minimal code changes." },
  { title: "Performance Impact", desc: "Up to 40% better price-performance ratio on AWS Graviton vs. x86 instances. 20-30% cost reduction for compute-intensive workloads. Improved energy efficiency and sustainability metrics. Typical migration completes in 2-4 weeks." },
  { title: "Risk Mitigation", desc: "Comprehensive compatibility validation, automated regression testing, and phased rollout strategies. Blue/green deployments enable instant rollback. Performance monitoring confirms gains before full cutover." },
  { title: "The Result", desc: "Measurable ROI within weeks, not months. Applications run faster, cost less, and leverage modern infrastructure—all without the risk and expense of a complete rewrite. Quick wins that fund larger modernization initiatives." }
];

export default function ModernizeScaleSection() {
  return (
    <section id="modernize-scale" className="px-4 sm:px-6 md:px-12 lg:px-16  lg: max-w-[1536px] mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
          <FiCode className="text-[#3A6FF7] text-sm md:text-base" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
            Application Modernization
          </span>
        </div>
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.03em] font-semibold text-white mb-8">
          Modernize & Scale
        </h2>
        <p className="text-[18px] sm:text-[22px] leading-[1.6] text-[#c8c5ca] font-medium max-w-3xl">
          Retire technical debt, escape legacy lock-in, and build cloud-native foundations — all AI-accelerated.
        </p>
      </div>

      {/* LRT Offering */}
      <div id="lrt" className="py-16 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">LRT</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Legacy Re-platforming & Translation
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "Retire the Debt. Release the Value."
            </p>
            
            <MetricsRow metrics={[
              { value: "70%", label: "Faster Translation" },
              { value: "AI", label: "Code Mapping" },
              { value: "0", label: "Legacy Debt" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Modernization</span>
            <FeatureGrid features={lrtFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Legacy Applications"
          sourceItems={["Dead-End Technologies", "VB6 / COBOL / PowerBuilder", "Legacy Java / .NET", "Mainframe Applications", "Monolithic Architecture"]}
          engineItems={["Code Transformation", "AI Code Analysis", "Logic Extraction", "Modern Framework Mapping", "Automated Testing"]}
          targetTitle="Target: AWS Cloud"
          targetItems={["Modern Cloud Applications", "Java/Spring Boot on ECS", ".NET Core on Elastic Beanstalk", "Python/Node.js on Lambda", "CI/CD with CodePipeline"]}
          footerText="Transformed applications deploy to AWS Elastic Container Service (ECS), Elastic Kubernetes Service (EKS), or AWS Lambda for serverless. Built on AWS Application Discovery Service for code analysis and AWS Migration Hub for tracking. Integrated with AWS CodeCommit, CodeBuild, and CodePipeline for modern CI/CD workflows. Monitoring via CloudWatch and X-Ray."
        />
      </div>

      {/* DBL Offering */}
      <div id="dbl" className="py-16 mt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">DBL</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Database Liberation
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "Break Free From the License Tax."
            </p>
            
            <MetricsRow metrics={[
              { value: "↓TCO", label: "Dramatic Reduction" },
              { value: "0", label: "Logic Lost" },
              { value: "0", label: "Vendor Lock-in" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Modernization</span>
            <FeatureGrid features={dblFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Legacy Databases"
          sourceItems={["Proprietary Platforms", "Oracle Database", "SQL Server Enterprise", "PL/SQL & T-SQL Logic", "High Licensing Costs"]}
          engineItems={["Database Transformation", "Schema Conversion", "Stored Procedure Translation", "Continuous Replication", "Automated Validation"]}
          targetTitle="Target: AWS Cloud"
          targetItems={["Open-Source & Managed", "Amazon Aurora PostgreSQL", "Amazon RDS (MySQL/MariaDB)", "AWS DMS for Migration", "60-80% Cost Savings"]}
          footerText="Leverages AWS Database Migration Service (DMS) for continuous replication with minimal downtime. AWS Schema Conversion Tool (SCT) handles complex PL/SQL and T-SQL transformations. Target databases run on Amazon Aurora for MySQL/PostgreSQL compatibility with 5x performance improvements, or Amazon RDS for fully managed open-source engines. Integrated with AWS Migration Hub for progress tracking."
        />
      </div>

      {/* CNE Offering */}
      <div id="cne" className="py-16 mt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">CNE</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Cloud-Native Foundation
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "From Monolith to Modern Architecture."
            </p>
            
            <MetricsRow metrics={[
              { value: "10x", label: "Deployment Frequency" },
              { value: "Auto", label: "Scaling" },
              { value: "0", label: "Downtime" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Modernization</span>
            <FeatureGrid features={cneFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Monolithic Applications"
          sourceItems={["Legacy Architecture", "Tightly-Coupled Monolith", "Manual Deployments", "Single Point of Failure", "Slow Release Cycles"]}
          engineItems={["Service Decomposition", "Domain Analysis", "Service Boundary Detection", "Containerization", "IaC Generation"]}
          targetTitle="Target: AWS Cloud"
          targetItems={["Cloud-Native Services", "ECS/EKS Microservices", "Lambda Serverless Functions", "API Gateway & EventBridge", "Auto-Scaling & CI/CD"]}
          footerText="Microservices deploy to Amazon ECS (Elastic Container Service) or EKS (Elastic Kubernetes Service) with Fargate for serverless containers. Built on AWS App2Container for automated containerization. Event-driven workflows use AWS Lambda, EventBridge, SNS, and SQS. API Gateway provides unified service access. Full CI/CD automation via AWS CodePipeline, CodeBuild, and CodeDeploy with blue/green deployments."
        />
      </div>

      {/* PXO Offering */}
      <div id="pxo" className="py-16 mt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">PXO</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Performance & Cross Platform Optimization
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "Immediate Gains, No Full Rewrite Required."
            </p>
            
            <MetricsRow metrics={[
              { value: "40%", label: "Better Price-Perf" },
              { value: "Weeks", label: "ROI Timeline" },
              { value: "Min", label: "Code Changes" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Modernization</span>
            <FeatureGrid features={pxoFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Legacy Infrastructure"
          sourceItems={["x86 Architecture", "Legacy Java/JDK 8", "x86 EC2 Instances", "Higher Compute Costs", "Outdated Runtimes"]}
          engineItems={["Platform Optimization", "Workload Profiling", "Compatibility Testing", "Performance Benchmarking", "IaC Deployment"]}
          targetTitle="Target: AWS Graviton"
          targetItems={["ARM-Based Performance", "AWS Graviton3 Processors", "Modern Java 17/21 Runtime", "40% Cost Reduction", "Enhanced Performance"]}
          footerText="Migrate workloads to AWS Graviton2/Graviton3 ARM-based processors for superior price-performance. Built on AWS Migration Hub for tracking and AWS Systems Manager for automated deployment. Compatible with EC2 (M7g, C7g, R7g instances), ECS/EKS containers, Lambda functions, and RDS databases. Automated testing validates compatibility, while CloudWatch metrics confirm performance improvements. Typical 40% cost savings with better throughput."
        />
      </div>

    </section>
  );
}
