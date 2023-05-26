import { Metadata } from 'next';
import getData from '../getData';
import Results from '../components/Results';

type Props = { params: { search: string } }

export async function generateMetadata({
  params: { search },
}: Props): Promise<Metadata> {
  // const user = await getUser(id);
  // if (!user || !user.name) {
  //   return {
  //     title: 'User not found',
  //   }
  // }
  return {
    title: search,
    description: `This is the wiki page about ${search}`
  };
}
export default async function SearchResults({ params: { search } }: Props) {
  const data = await getData(search) as SearchResult
  const pages = data?.query?.pages
  console.log
  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      <h1>Search results</h1>
      {pages ? (
        <div>
          {Object.values(pages).map(page => (
            <Results key={page.pageid} result={page} />
          ))}
        </div>
      ) : (
        <div>{search} not found in Wiki</div>
      )}
    </main>
  )
}