type AvatarProps = {
  name: string;
};

export default function Avatar({ name }: AvatarProps) {
  const firstLetter = name.charAt(0).toUpperCase();
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-12 flex items-center justify-center">
        <span className="text-xl">{firstLetter}</span>
      </div>
    </div>
  );
}
