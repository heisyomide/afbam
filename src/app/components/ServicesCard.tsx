// components/ServicesCard.tsx
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServicesCard({ title, description, Icon }: Props) {
  return (
    <div className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-all group">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}