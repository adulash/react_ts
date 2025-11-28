import Avatar from "./Avatar";

type UserInfoProps = {
  name: string;
};

export default function UserInfo({ name }: UserInfoProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg">
      <Avatar name={name} />
      <h3 className="font-semibold text-base-content">{name}</h3>
    </div>
  );
}
