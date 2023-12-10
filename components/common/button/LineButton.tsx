import clsx from 'clsx';

interface Props {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export default function LineButton({ text, active = false, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('w-full rounded-lg border px-4 py-2.5 text-sm font-medium text-black', {
        'border-blue-600 bg-blue-100': active
      })}
    >
      {text}
    </button>
  );
}
