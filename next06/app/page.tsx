import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='m-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👏&nbsp;
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Elem</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
