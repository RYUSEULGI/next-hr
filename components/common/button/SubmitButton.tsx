import LoadingDots from '../LoadingDots';

interface Props {
  type?: 'submit' | 'button';
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SubmitButton({ type = 'button', loading, text, disabled, onClick }: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
    >
      {loading ? <LoadingDots className="mb-3 bg-white" /> : text}
    </button>
  );
}
