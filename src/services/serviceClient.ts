interface Props {
  query: string;
  variables: Record<string, unknown>;
}

const apiRoute = "https://rickandmortyapi.com/graphql";

export const serviceClient = async <T>({
  query,
  variables,
}: Props): Promise<T> => {
  const response = await fetch(apiRoute, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());

  return response.data;
};
