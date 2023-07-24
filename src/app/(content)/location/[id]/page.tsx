export default async function CharacterById({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {params.id}
    </main>
  );
}
