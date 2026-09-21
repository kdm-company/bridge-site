import { Plus } from 'lucide-react';

export function PhotoPlaceholder({
  number,
  label,
  variant = 'company',
}: {
  number: string;
  label: string;
  variant?: 'hero' | 'company';
}) {
  return (
    <div
      className={`photo-placeholder photo-placeholder--${variant}`}
      role="img"
      aria-label={`${label}の写真プレースホルダー`}
    >
      <div className="photo-placeholder-top" aria-hidden="true">
        <span>IMAGE {number}</span>
        <Plus size={17} />
      </div>
      <div className="photo-placeholder-center" aria-hidden="true">
        <span className="placeholder-cross" />
        <span>PHOTO PLACEHOLDER</span>
      </div>
      <div className="photo-placeholder-bottom" aria-hidden="true">
        <span>{label}</span>
        <span>BRIDGE</span>
      </div>
    </div>
  );
}
