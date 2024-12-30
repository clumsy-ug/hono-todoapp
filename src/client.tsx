import { useSuspenseQuery } from "@tanstack/react-query";

export const Hello = () => {
  // 3秒遅延して返却されるエンドポイントを叩いてみる
  const { data } = useSuspenseQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const response = await fetch("https://httpbin.org/delay/3");
      return response.json();
    },
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>Click on the links above to see the code splitting in action.</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};
