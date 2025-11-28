type GreetingProps = {
  name: string;
  age: number;
};

export default function Greeting({ name, age }: GreetingProps) {
  return (
    <div>
      <p>Hello {name}</p>
      <p>You are {age} years old</p>
    </div>
  );
}

