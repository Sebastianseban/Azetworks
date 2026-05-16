import React from "react";
import { FiArrowRight, FiCpu, FiCloudLightning, FiLayers } from "react-icons/fi";

const ArchitectureDiagram = ({ sourceTitle, sourceItems, engineItems, targetTitle, targetItems, footerText }) => (
  <div className="mt-12 bg-[#111112] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
    <h4 className="text-[20px] font-semibold text-white mb-8 tracking-tight">AI Architecture</h4>
    
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
        <strong className="text-white mr-2">AWS Integration:</strong>
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

const gatFeatures = [
  { title: "The Mission", desc: "Embed Generative AI into core business processes to transform how organizations work with data, make decisions, and serve customers. GAT converts static enterprise knowledge—documents, databases, legacy systems—into intelligent, queryable assets that power productivity, accelerate decision-making, and create differentiated customer experiences." },
  { title: "The Tech Stack", desc: "Azet GenAI Accelerators: Enterprise-grade LLM integration with Retrieval-Augmented Generation (RAG) architectures. Secure data ingestion pipelines, vector databases for semantic search, prompt orchestration frameworks, and guardrails for responsible AI. Built on AWS Bedrock, SageMaker, and OpenSearch." },
  { title: "Use Cases", desc: "Intelligent document processing, automated report generation, conversational analytics, knowledge base Q&A, code generation, customer service augmentation, contract analysis, and compliance automation. Domain-specific fine-tuning available." },
  { title: "Business Impact", desc: "50-70% reduction in manual knowledge work. Instant access to organizational intelligence across siloed systems. Automated insights from unstructured data. Faster decision cycles with AI-powered recommendations. Enhanced customer experiences through personalized, context-aware interactions." },
  { title: "Security & Governance", desc: "Enterprise-grade data privacy with private model deployments. Role-based access control, audit logging, and compliance frameworks (GDPR, HIPAA, SOC2). Content filtering, bias detection, and responsible AI monitoring built in." },
  { title: "The Result", desc: "Intelligent applications that don't just store data—they understand it, reason about it, and act on it. Organizations gain a 360-degree uplift in operational intelligence while reducing costs and accelerating time-to-insight from weeks to seconds." }
];

const aatFeatures = [
  { title: "The Mission", desc: "Move beyond simple chatbots and Q&A systems to deploy autonomous AI agents that plan, reason, and execute complex multi-step workflows with minimal human intervention. AAT creates specialized digital workers that handle end-to-end business processes—from customer service escalations to data analysis pipelines—with the intelligence to adapt, learn, and improve over time." },
  { title: "The Tech Stack", desc: "Multi-Agent Frameworks: Tool-using LLMs with function calling, memory systems, and reasoning capabilities. Azet's Agent Governance Layer provides safety guardrails, monitoring, approval workflows, and continuous learning loops. Built on LangChain, AutoGen, and AWS Bedrock Agents." },
  { title: "Agent Capabilities", desc: "Autonomous task planning, multi-step workflow execution, tool integration (APIs, databases, systems), decision-making with context awareness, error handling and recovery, human-in-the-loop escalation, and continuous learning from feedback." },
  { title: "Use Cases", desc: "Intelligent customer service agents, automated data analysis and reporting, IT operations automation (AIOps), procurement and approval workflows, compliance monitoring, code review and testing, research and synthesis tasks, and cross-system orchestration." },
  { title: "Governance & Safety", desc: "Multi-layer approval workflows for high-stakes actions. Real-time monitoring and audit trails. Configurable autonomy levels (fully autonomous to human-supervised). Rollback capabilities and safety constraints. Performance analytics and continuous improvement feedback loops." },
  { title: "The Result", desc: "True AI-driven automation at enterprise scale. Digital workers that don't just answer questions—they complete entire workflows, coordinate across systems, and handle exceptions intelligently. Organizations accelerate operations by delegating complex, multi-step processes to specialized AI agents that work 24/7." }
];

const futureCapabilities = [
  { title: "Cloud Service Provisioning Agents", desc: "Specialized agents automate cloud resource provisioning and optimize services across multiple cloud platforms, enhancing efficiency and scalability.", icon: <FiCloudLightning /> },
  { title: "Migration & Modernization Assessment Agents", desc: "Agents analyze cloud readiness, calculate TCO, generate migration recommendations, and assist in migrations between AWS, Azure, GCP, and OCI.", icon: <FiLayers /> },
  { title: "Automated Infrastructure & Code Transformation", desc: "Infrastructure agents generate and deploy scripts from natural language queries, while connectors enable code assessment and transformation for modernization.", icon: <FiCpu /> }
];

export default function AIWorkflowSection() {
  return (
    <section id="ai-powered-workflows" className="px-4 sm:px-6 md:px-12 lg:px-16 py-20 lg:py-[160px] max-w-[1536px] mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
          <FiCpu className="text-[#3A6FF7] text-sm md:text-base" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
            Intelligent Automation
          </span>
        </div>
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.03em] font-semibold text-white mb-8">
          AI-Powered Workflows
        </h2>
        <p className="text-[18px] sm:text-[22px] leading-[1.6] text-[#c8c5ca] font-medium max-w-3xl">
          From embedding LLMs into business processes to deploying autonomous AI agents — Azetworks makes AI real, safe, and scalable.
        </p>
      </div>

      {/* GAT Offering */}
      <div id="gat" className="py-16 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">GAT</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              GenAI Transformation
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "Turn Enterprise Data into Competitive Advantage."
            </p>
            
            <MetricsRow metrics={[
              { value: "50-70%", label: "Work Reduction" },
              { value: "Instant", label: "Insights" },
              { value: "360°", label: "Intelligence" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">GenAI</span>
            <FeatureGrid features={gatFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Enterprise Data"
          sourceItems={["Static Knowledge", "Documents & Reports", "Databases & Data Lakes", "Legacy Systems", "Unstructured Content"]}
          engineItems={["GenAI Processing", "Data Ingestion & Indexing", "RAG Architecture", "Prompt Orchestration", "Guardrails & Governance"]}
          targetTitle="Target: AWS AI Stack"
          targetItems={["Intelligent Applications", "Amazon Bedrock (LLMs)", "SageMaker (Fine-Tuning)", "OpenSearch (Vector DB)", "Lambda (Orchestration)"]}
          footerText="Built on Amazon Bedrock for access to foundation models (Claude, Llama, Titan) with enterprise security. Amazon SageMaker enables custom model fine-tuning. OpenSearch Service provides vector database capabilities for semantic search. AWS Lambda orchestrates workflows, while API Gateway exposes intelligent APIs. Full audit trails via CloudTrail and compliance monitoring."
        />
      </div>

      {/* AAT Offering */}
      <div id="aat" className="py-16 mt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">AAT</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Agentic AI Transformation
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "From Chatbots to Autonomous Digital Workers."
            </p>
            
            <MetricsRow metrics={[
              { value: "24/7", label: "Autonomous Ops" },
              { value: "Multi-Step", label: "Workflows" },
              { value: "Safe", label: "Governance" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">GenAI</span>
            <FeatureGrid features={aatFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Traditional Automation"
          sourceItems={["Limited Chatbots", "Simple Q&A Systems", "Rule-Based Workflows", "No Reasoning Capability", "Manual Escalations"]}
          engineItems={["Agent Orchestration", "Task Planning & Reasoning", "Tool Integration", "Multi-Agent Coordination", "Governance & Safety"]}
          targetTitle="Target: AWS AI Stack"
          targetItems={["Autonomous Agents", "Bedrock Agents (LLM)", "Step Functions (Orchestration)", "Lambda (Tool Execution)", "DynamoDB (Agent Memory)"]}
          footerText="Built on Amazon Bedrock Agents for autonomous reasoning and action. AWS Step Functions orchestrates complex multi-step workflows with error handling. Lambda functions provide tool integration (APIs, databases, systems). DynamoDB stores agent memory and context. EventBridge enables event-driven agent triggers. CloudWatch monitors agent performance and safety metrics with automated alerts."
        />
      </div>

      {/* Future Capabilities */}
      <div className="mt-20 pt-20 border-t border-white/10">
        <div className="text-center mb-16">
          <h3 className="text-[36px] sm:text-[48px] font-semibold text-white tracking-tight mb-6">Future Agentic Capabilities</h3>
          <p className="text-[#8e8c96] text-[18px] max-w-2xl mx-auto">
            Our autonomous roadmap extends agentic workflows deep into cloud operations, infrastructure management, and continuous optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {futureCapabilities.map((capability, idx) => (
            <div key={idx} className="bg-[#111112] border border-white/5 rounded-3xl p-8 hover:bg-[#151517] hover:border-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3A6FF7]/20 to-[#3A6FF7]/5 flex items-center justify-center text-[#3A6FF7] text-2xl mb-8">
                {capability.icon}
              </div>
              <h4 className="text-[20px] font-semibold text-white mb-4 leading-snug">{capability.title}</h4>
              <p className="text-[#8e8c96] leading-relaxed text-[15px]">{capability.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}