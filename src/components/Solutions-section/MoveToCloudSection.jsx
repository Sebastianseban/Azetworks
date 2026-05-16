import React from "react";
import { FiArrowRight, FiCloud } from "react-icons/fi";

const ArchitectureDiagram = ({ sourceTitle, sourceItems, engineItems, targetTitle, targetItems, footerText }) => (
  <div className="mt-12 bg-[#111112] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
    <h4 className="text-[20px] font-semibold text-white mb-8 tracking-tight">Migration Architecture</h4>
    
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

const demsFeatures = [
  { title: "The Mission", desc: "Eradicate hardware debt by fully decommissioning VMware, Hyper-V, KVM, or Bare-Metal environments through a factory-scale migration engine. DEMS handles the complete lifecycle from discovery through decommissioning, ensuring zero residual infrastructure and maximum cloud efficiency." },
  { title: "The Secret Sauce", desc: 'Agentic AI Orchestration: Autonomously handles discovery, wave planning, dependency mapping, and validation. No more manual spreadsheets or "guess-and-check" migrations. Our AI agents learn your environment and optimize migration paths in real-time.' },
  { title: "Efficiency & Speed", desc: '60% more efficient than manual migration approaches. Typical datacenter exits complete 3-4x faster with zero "guess-and-check" workflows. Automated discovery maps 10,000+ VMs in days, not months.' },
  { title: "Supported Platforms", desc: "VMware vSphere (all versions), Hyper-V, KVM, Citrix XenServer, Bare-Metal servers. Multi-hypervisor environments handled seamlessly with unified orchestration." },
  { title: "Cloud Targets", desc: "AWS (EC2, Auto Scaling), Azure (VMs, Scale Sets), Google Cloud (Compute Engine), Oracle Cloud. Optimized for each cloud's native services and pricing models." },
  { title: "The Result", desc: "A predictable, high-volume exit with zero residual hardware debt. Workloads perform identically in the cloud as they did on-premise. Complete infrastructure decommissioning with certified asset disposal and compliance documentation." }
];

const c2cFeatures = [
  { title: "The Mission", desc: 'Seamlessly shift workloads between AWS, Azure, and GCP to optimize costs, consolidate fragmented ecosystems, or align with specific CSP-native services. C2C eliminates provider lock-in and enables true cloud flexibility without the traditional "Migration Tax" of downtime and data loss.' },
  { title: "The Tech Stack", desc: "Agentic AI-based assessments combined with bit-for-bit cloning of compute, object storage, and managed databases. Real-time replication ensures zero data loss during transitions." },
  { title: "Supported Migrations", desc: "AWS ↔ Azure, AWS ↔ GCP, Azure ↔ GCP, and multi-cloud consolidations. Handles EC2, RDS, S3, Azure VMs, Cosmos DB, Cloud Storage, and managed services." },
  { title: "Orchestrated Cut-Overs", desc: "Automated switching mechanism that handles DNS, networking, and load balancer updates simultaneously. Total vendor fluidity with coordinated failover and rollback capabilities." },
  { title: "Cost Optimization", desc: "AI analyzes pricing across providers and recommends optimal instance types, storage classes, and reserved capacity. Typical savings: 20-40% through intelligent right-sizing." },
  { title: "The Result", desc: "Frictionless Mobility: Near-zero downtime and zero data loss during cross-provider transitions. Eliminate provider lock-in, reduce costs, and maintain full operational continuity throughout the migration." }
];

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
        <div className="text-[12px] uppercase tracking-[0.2em] text-[#3A6FF7] font-semibold">
          {metric.label}
        </div>
      </div>
    ))}
  </div>
);

export default function MoveToCloudSection() {
  return (
    <section id="move-to-cloud" className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-[160px] max-w-[1536px] mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
          <FiCloud className="text-[#3A6FF7] text-sm md:text-base" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
            Cloud Migration Solutions
          </span>
        </div>
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.03em] font-semibold text-white mb-8">
          Move to Cloud
        </h2>
        <p className="text-[18px] sm:text-[22px] leading-[1.6] text-[#c8c5ca] font-medium max-w-3xl">
          Factory-scale migration engines that eliminate hardware debt and provider lock-in — powered by agentic AI orchestration.
        </p>
      </div>

      {/* DEMS Offering */}
      <div id="dems" className="py-16 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">DEMS</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Datacenter Exit Made Simple
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "The 'Easy Button' for Total On-Premise Decommissioning"
            </p>
            
            <MetricsRow metrics={[
              { value: "60%", label: "More Efficient" },
              { value: "0", label: "Hardware Debt" },
              { value: "AI", label: "Orchestrated" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Migration</span>
            <FeatureGrid features={demsFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Source Environment"
          sourceItems={["On-Premise Datacenter", "VMware vSphere", "Hyper-V / KVM", "Bare-Metal Servers", "Legacy Storage"]}
          engineItems={["Migration Orchestration", "AI Discovery & Mapping", "Wave Planning", "Automated Replication", "Validation & Testing"]}
          targetTitle="Target: AWS Cloud"
          targetItems={["Cloud-Native Infrastructure", "Amazon EC2 / Auto Scaling", "Amazon EBS / EFS", "AWS VPC / Transit Gateway", "CloudWatch Monitoring"]}
          footerText="Built on AWS Application Migration Service (MGN) and AWS Migration Hub, enhanced with Azetworks AI for intelligent wave planning, dependency mapping, and automated validation. Seamless integration with AWS Landing Zone and Control Tower for governance."
        />
      </div>

      {/* C2C Offering */}
      <div id="c2c" className="py-16 mt-8 border-t border-white/10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 shrink-0">
            <span className="text-[#3A6FF7] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">C2C</span>
            <h3 className="text-[32px] sm:text-[40px] font-semibold text-white leading-[1.1] mb-6">
              Cloud to Cloud Migration
            </h3>
            <p className="text-[18px] sm:text-[20px] italic text-[#8e8c96] mb-8">
              "The Freedom to Move Across the Hyperscale Divide"
            </p>
            
            <MetricsRow metrics={[
              { value: "~0", label: "Downtime" },
              { value: "0", label: "Data Loss" },
              { value: "3", label: "Hyperscalers" }
            ]} />
          </div>
          
          <div className="lg:w-2/3">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs uppercase tracking-widest text-[#c8c5ca] mb-4">Migration</span>
            <FeatureGrid features={c2cFeatures} />
          </div>
        </div>

        <ArchitectureDiagram 
          sourceTitle="Source Cloud"
          sourceItems={["Azure / GCP / Oracle", "Virtual Machines", "Managed Databases", "Object Storage", "Networking & Security"]}
          engineItems={["Cross-Cloud Orchestration", "AI Cost Analysis", "Real-Time Replication", "Service Mapping", "Automated Cut-Over"]}
          targetTitle="Target: AWS Cloud"
          targetItems={["Optimized AWS Services", "EC2 / RDS / Aurora", "S3 / EBS / EFS", "VPC / Route 53", "Cost-Optimized Instances"]}
          footerText="Built on AWS DataSync, Database Migration Service (DMS), and Transfer Family for seamless cross-cloud data movement. AI-powered cost optimization identifies the best AWS instance types, storage classes, and reserved capacity options—typically achieving 20-40% cost savings compared to source cloud. Integrated with AWS Migration Hub for centralized tracking."
        />
      </div>

    </section>
  );
}