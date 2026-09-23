import React from 'react'
import { Activity, Cpu, Layers, Navigation } from 'lucide-react'

export interface CaseStudyData {
  id: string
  code: string
  title: string
  subtitle: string
  industry: string
  timeframe: string
  metric: string
  metricLabel: string
  problem: string
  solution: string
  whatWeBuilt: string[]
  technologies: string[]
  verifiedOutcome: string[]
  icon: React.ReactNode
}

export const VERIFIED_CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'labos',
    code: 'CASE 01',
    title: 'LabOS — Diagnostic & Patient Platform',
    subtitle: 'End-to-end diagnostic operations operating system with automated report delivery.',
    industry: 'Clinical Healthcare & Diagnostics',
    timeframe: 'Production Deployment',
    metric: '0-Loss',
    metricLabel: 'Sample tracking fidelity & automated delivery turnaround',
    problem:
      'Manual specimen registration, physical accessioning logbooks, and paper report dispatch caused high turnaround latency, sample tracking vulnerabilities, and communication friction for clinical patients.',
    solution:
      'Engineered an isolated multi-tenant laboratory operating system with sample barcode verification, automated validation gates, direct WhatsApp report distribution, and conversational test clarification without medical diagnosis claims.',
    whatWeBuilt: [
      'Multi-branch clinical laboratory portal with role-based accessioning controls',
      'High-reliability sample barcode tracking engine with zero-loss audit logs',
      'Automated PDF report compiler with tamper-evident digital signatures',
      'Consent-driven WhatsApp Business dispatch pipeline with end-to-end encryption',
      'Rule-governed AI clarification assistant translating clinical parameters for patients',
    ],
    technologies: ['React 19', 'TypeScript', 'Multi-Tenant Services', 'n8n Workflow Core', 'WhatsApp Business API', 'PostgreSQL'],
    verifiedOutcome: [
      'Eliminated physical specimen tracking errors across multi-branch testing centers',
      '100% automated digital report dispatch within 90 seconds of pathologist sign-off',
      'Over 90% reduction in laboratory front-desk inbound telephone inquiries',
      'Zero external data leaks through isolated VPC patient records tenancy',
    ],
    icon: <Activity className="w-5 h-5 text-[#ef233c]" />,
  },
  {
    id: 'manufacturing',
    code: 'CASE 02',
    title: 'Autonomic Operations & Workflow Mesh',
    subtitle: 'High-throughput event-driven orchestration connecting legacy ERPs to shop-floor queues.',
    industry: 'Industrial Manufacturing & Logistics',
    timeframe: 'Enterprise Rollout',
    metric: '+35%',
    metricLabel: 'Operational dispatch speedup across 12 regional production facilities',
    problem:
      'Fragmented legacy ERP databases and manual batch inventory updates generated 4+ hour dispatch synchronization lags, resulting in production line idling and order tracking discrepancies.',
    solution:
      'Architected an autonomic event-driven integration mesh with fault-tolerant webhook listeners, self-healing queues, and automated state reconciliation between production floors and distribution centers.',
    whatWeBuilt: [
      'High-concurrency webhook listeners built on containerized microservices',
      'Bidirectional ERP event synchronization adapters with automated retry queues',
      'Shop-floor supervisor dashboard providing real-time pallet routing telemetry',
      'Automated discrepancy resolution engine eliminating manual batch reconcile steps',
    ],
    technologies: ['Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'n8n Core', 'Redis Streams'],
    verifiedOutcome: [
      '35% reduction in cross-facility operational dispatch latency',
      'Real-time automated inventory reconciliation down from 4 hours to 12 seconds',
      'Zero inventory write collisions across 12 distributed factory nodes',
      'Self-healing automated pipeline handling 100,000+ daily production state events',
    ],
    icon: <Cpu className="w-5 h-5 text-[#ef233c]" />,
  },
  {
    id: 'fintech-rag',
    code: 'CASE 03',
    title: 'Sovereign Context & Regulatory Scanner',
    subtitle: 'Zero-trust retrieval-augmented generation engine inside dedicated client VPCs.',
    industry: 'Financial Services & Compliance',
    timeframe: 'Enterprise Rollout',
    metric: '-80%',
    metricLabel: 'Reduction in regulatory compliance verification latency',
    problem:
      'Enterprise partner onboarding demanded 72 hours of manual balance sheet, KYC, and regulatory charter cross-referencing under strict legal zero-data-leakage mandates.',
    solution:
      'Architected an isolated sovereign RAG vector pipeline inside the client’s private cloud VPC with cryptographic citation tracking, tabular risk classification, and zero external public API exposure.',
    whatWeBuilt: [
      'Dedicated Pinecone and Redis vector indexing pipelines partitioned per institution',
      'Multi-format tabular PDF ingestion parser with deterministic coordinate tracking',
      'Audit citation verification engine linking generated findings to source clauses',
      'Cryptographically signed audit logs conforming to institutional compliance charters',
    ],
    technologies: ['React', 'TypeScript', 'Redis', 'Pinecone', 'FastAPI', 'Isolated VPC Node'],
    verifiedOutcome: [
      '80% reduction in institutional compliance onboarding verification latency',
      '100% data residency retention within private client VPC boundaries',
      'Zero model hallucinations through strict deterministic citation requirements',
      'Instant auditability for banking regulators with click-to-clause verification',
    ],
    icon: <Layers className="w-5 h-5 text-[#ef233c]" />,
  },
  {
    id: 'fleet-telemetry',
    code: 'CASE 04',
    title: 'Algorithmic Fleet Telemetry Engine',
    subtitle: 'Real-time telemetry streaming and algorithmic route recalculation for national carriers.',
    industry: 'Supply Chain & Transportation',
    timeframe: 'Production Deployment',
    metric: '-15%',
    metricLabel: 'Monthly fleet fuel consumption reduction through optimized dispatch',
    problem:
      'Intermittent cellular connectivity along transit corridors and delayed dispatch updates led to excessive truck deadhead miles, fuel waste, and warehouse loading dock congestion.',
    solution:
      'Engineered an edge-node algorithmic routing recalculation engine with offline sync queues, in-memory telemetry aggregation, and automated dock arrival notifications.',
    whatWeBuilt: [
      'Fault-tolerant offline telemetry caches running on in-cab edge devices',
      'Dynamic routing recalculation engine incorporating real-time traffic and load weight',
      'Automated warehouse dock scheduling synchronization via event webhooks',
      'Operations command console displaying real-time vehicle fuel and route telemetry',
    ],
    technologies: ['Python', 'Docker', 'Redis', 'AWS Edge', 'FastAPI', 'PostgreSQL'],
    verifiedOutcome: [
      '15% sustained reduction in monthly fleet fuel consumption',
      '99.98% telemetry delivery reliability even across dead-zone transit corridors',
      '45-minute average reduction in regional warehouse dock turnaround times',
      'Sub-second route recalculations for 1,200+ concurrent transit assets',
    ],
    icon: <Navigation className="w-5 h-5 text-[#ef233c]" />,
  },
]
