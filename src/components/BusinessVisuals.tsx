import React from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers,
  LayoutGrid,
  Mail,
  Rocket,
  Search,
  Gamepad2,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from 'lucide-react';

type AreaVariant = 'website' | 'development' | 'commerce' | 'marketing' | 'erp' | 'mobile' | 'game';

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

const Panel = ({ children, className = '' }: PanelProps) => (
  <div className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl ${className}`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.06),_transparent_55%),linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(241,245,249,0.9))]" />
    <div className="relative h-full">{children}</div>
  </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
    <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{label}</div>
    <div className="mt-2 font-headline text-lg font-bold text-slate-900">{value}</div>
  </div>
);

export const HeroWorkspaceVisual = () => (
  <Panel className="aspect-square p-6">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
    <div className="absolute -bottom-12 left-4 h-40 w-40 rounded-full bg-on-tertiary-container/10 blur-3xl" />
    <div className="grid h-full grid-cols-[1.35fr_0.9fr] gap-4">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-4 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="rounded-full border border-white/10 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
            Live Project Stack
          </div>
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-rows-[1.15fr_0.85fr] gap-4">
          <div className="rounded-[1.5rem] bg-white/5 p-5">
            <div className="mb-4 flex items-center gap-3">
              <Globe className="text-secondary" size={20} />
              <div>
                <div className="font-headline text-lg font-bold">Website and platform design</div>
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-white/60">Structure, UX, messaging</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Discovery', 'Content', 'Launch'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="font-label text-[10px] uppercase tracking-[0.15em] text-white/50">Stage</div>
                  <div className="mt-2 font-body text-sm text-white/90">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="rounded-[1.5rem] bg-secondary p-5 text-white">
              <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Core mix</div>
              <div className="mt-3 space-y-3">
                {['Design systems', 'Development', 'Marketing growth'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/10 pb-2 text-sm last:border-0 last:pb-0">
                    <span>{item}</span>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Execution</div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                    <span>Build readiness</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[92%] rounded-full bg-on-tertiary-container" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-white/70">
                    <span>Growth tracking</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[78%] rounded-full bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <Metric label="Delivery model" value="Design, build, market" />
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5">
          <div className="mb-4 flex items-center gap-3">
            <Smartphone className="text-secondary" size={20} />
            <div>
              <div className="font-headline text-base font-bold text-slate-900">Cross-device ready</div>
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-500">Web and mobile product views</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[1.5rem] bg-slate-900 p-3">
              <div className="mb-3 h-2 w-14 rounded-full bg-white/20" />
              <div className="space-y-2">
                <div className="h-20 rounded-[1rem] bg-white/10" />
                <div className="h-6 rounded-full bg-secondary" />
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
              <div className="mb-3 h-2 w-12 rounded-full bg-slate-200" />
              <div className="space-y-2">
                <div className="h-12 rounded-xl bg-slate-200" />
                <div className="h-12 rounded-xl bg-slate-900" />
                <div className="h-4 w-16 rounded-full bg-secondary/30" />
              </div>
            </div>
          </div>
        </div>
        <Metric label="Focus" value="Readable UX + measurable growth" />
      </div>
    </div>
  </Panel>
);

export const TeamCollaborationVisual = () => (
  <Panel className="min-h-[30rem] p-6">
    <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
    <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Integrated team</div>
            <div className="mt-2 font-headline text-2xl font-bold">Creative and technical collaboration</div>
          </div>
          <Users className="text-secondary" size={26} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Design', items: ['Brand direction', 'Layout clarity'] },
            { title: 'Development', items: ['Platform build', 'System stability'] },
            { title: 'Content', items: ['Message flow', 'Readable structure'] },
            { title: 'Growth', items: ['SEO support', 'Lead generation'] },
          ].map((card) => (
            <div key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <div className="font-headline text-lg font-bold">{card.title}</div>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                {card.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5">
          <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Workflow</div>
          <div className="mt-4 space-y-3">
            {['Requirement mapping', 'Creative direction', 'Build sprints', 'Launch support'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-label text-[10px] font-bold text-white">0{index + 1}</div>
                <span className="font-body text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Metric label="Output" value="One aligned team" />
          <Metric label="Priority" value="Business-fit delivery" />
        </div>
      </div>
    </div>
  </Panel>
);

export const DeliveryFlowVisual = () => (
  <Panel className="max-w-xs p-4">
    <div className="space-y-3">
      {[
        { step: '01', title: 'Discover' },
        { step: '02', title: 'Build' },
        { step: '03', title: 'Improve' },
      ].map((item, index) => (
        <div key={item.step} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
          <div className={`flex h-9 w-9 items-center justify-center rounded-full font-label text-[10px] font-bold ${index === 1 ? 'bg-secondary text-white' : 'bg-slate-900 text-white'}`}>
            {item.step}
          </div>
          <div>
            <div className="font-headline text-sm font-bold text-slate-900">{item.title}</div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-500">Project stage</div>
          </div>
        </div>
      ))}
    </div>
  </Panel>
);

export const BusinessAreaVisual = ({ variant }: { variant: AreaVariant }) => {
  const config = {
    website: {
      icon: Globe,
      eyebrow: 'Website Systems',
      title: 'Structure, content and experience',
      chips: ['UX', 'Content', 'SEO'],
      stats: ['Navigation clarity', 'Conversion paths'],
    },
    development: {
      icon: Code2,
      eyebrow: 'Web Development',
      title: 'CMS, portals and application delivery',
      chips: ['Frontend', 'Backend', 'CMS'],
      stats: ['Stable builds', 'Scalable logic'],
    },
    commerce: {
      icon: Layers,
      eyebrow: 'Commerce Operations',
      title: 'Catalog, content and publishing flow',
      chips: ['Products', 'Publishing', 'Orders'],
      stats: ['Team updates', 'Managed content'],
    },
    marketing: {
      icon: BarChart3,
      eyebrow: 'Growth Delivery',
      title: 'Traffic, visibility and campaign measurement',
      chips: ['SEO', 'Paid', 'Email'],
      stats: ['Lead quality', 'Performance view'],
    },
    erp: {
      icon: Database,
      eyebrow: 'ERP Framework',
      title: 'Modules that reduce manual work',
      chips: ['Sales', 'Inventory', 'Finance'],
      stats: ['Workflow control', 'Shared data'],
    },
    mobile: {
      icon: Smartphone,
      eyebrow: 'Mobile Product',
      title: 'Android and iOS rollout planning',
      chips: ['Prototype', 'UI', 'Release'],
      stats: ['Device ready', 'Feature map'],
    },
    game: {
      icon: Gamepad2,
      eyebrow: 'Game Development',
      title: 'Engaging interactive experiences',
      chips: ['Gameplay', 'Design', 'Mechanics'],
      stats: ['Player retention', 'Platform reach'],
    },
  }[variant];

  const Icon = config.icon;

  return (
    <Panel className="min-h-[24rem] p-5">
      <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
      <div className="grid h-full gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{config.eyebrow}</div>
              <div className="mt-2 max-w-xs font-headline text-2xl font-bold leading-tight">{config.title}</div>
            </div>
            <Icon className="text-secondary" size={24} />
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {config.chips.map((chip) => (
              <div key={chip} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-white/50">Focus</div>
                <div className="mt-3 font-body text-sm text-white/90">{chip}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between text-xs text-white/70">
              <span>Execution readiness</span>
              <span>85%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className="h-2 w-[85%] rounded-full bg-secondary" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Metric label="Primary outcome" value={config.stats[0]} />
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-headline text-base font-bold text-slate-900">Working view</div>
              <LayoutGrid className="text-secondary" size={18} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4">
                <div className="mb-2 h-2 w-12 rounded-full bg-slate-200" />
                <div className="h-14 rounded-xl bg-slate-900" />
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="mb-2 h-2 w-10 rounded-full bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-5 rounded-full bg-secondary/30" />
                  <div className="h-5 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <Metric label="Secondary outcome" value={config.stats[1]} />
        </div>
      </div>
    </Panel>
  );
};

export const ERPDashboardVisual = () => (
  <Panel className="aspect-square p-5">
    <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-on-tertiary-container/10 blur-3xl" />
    <div className="grid h-full gap-4 grid-rows-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">ERP command view</div>
            <div className="mt-2 font-headline text-2xl font-bold">Operations dashboard</div>
          </div>
          <Database className="text-secondary" size={26} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['Sales', 'Warehouse', 'Finance'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-white/50">Module</div>
              <div className="mt-3 font-body text-sm text-white">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-headline text-lg font-bold text-slate-900">Process status</div>
            <Activity className="text-secondary" size={20} />
          </div>
          <div className="space-y-4">
            {[
              ['Order flow', '94%'],
              ['Inventory sync', '87%'],
              ['Reporting visibility', '91%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-slate-900" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <Metric label="Business benefit" value="Less manual coordination" />
          <Metric label="Result" value="Shared operational control" />
        </div>
      </div>
    </div>
  </Panel>
);

export const MobileProductVisual = ({ compact = false }: { compact?: boolean }) => (
  <Panel className={`${compact ? 'h-48 p-4' : 'aspect-square p-5'}`}>
    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
    <div className={`grid h-full ${compact ? 'grid-cols-2 gap-3' : 'grid-cols-[0.9fr_1.1fr] gap-4'}`}>
      <div className="flex items-center justify-center">
        <div className={`${compact ? 'h-full w-full' : 'h-[88%] w-[72%]'} rounded-[2.5rem] border border-slate-300 bg-slate-950 p-3 shadow-xl`}>
          <div className="mb-3 flex justify-center">
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>
          <div className="space-y-3">
            <div className="rounded-[1.5rem] bg-white/10 p-3">
              <div className="mb-2 h-2 w-14 rounded-full bg-white/20" />
              <div className="h-20 rounded-[1rem] bg-secondary" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl bg-white/10" />
              <div className="h-12 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <Metric label="Approach" value="Prototype before build" />
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="font-headline text-base font-bold text-slate-900">Release plan</div>
            <Rocket className="text-secondary" size={18} />
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            {['Android rollout', 'iOS rollout', 'Post-launch updates'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white p-3">
                <CheckCircle2 size={14} className="text-secondary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Panel>
);

export const LeadPipelineVisual = () => (
  <Panel className="aspect-square p-5">
    <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
    <div className="grid h-full gap-4 grid-rows-[0.85fr_1.15fr]">
      <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Pipeline focus</div>
            <div className="mt-2 font-headline text-2xl font-bold">Qualified lead flow</div>
          </div>
          <Target className="text-secondary" size={24} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Search, label: 'Search' },
            { icon: Mail, label: 'Email' },
            { icon: BarChart3, label: 'Ads' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <item.icon className="mx-auto text-secondary" size={18} />
              <div className="mt-3 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5">
          <div className="mb-5 font-headline text-lg font-bold text-slate-900">Lead scoring view</div>
          <div className="space-y-4">
            {[
              ['Service fit', '90%'],
              ['Intent quality', '82%'],
              ['Conversation readiness', '76%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-secondary" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <Metric label="Goal" value="Relevant buyer conversations" />
          <Metric label="Method" value="SEO, email, paid and nurture" />
        </div>
      </div>
    </div>
  </Panel>
);