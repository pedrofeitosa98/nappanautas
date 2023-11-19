import NextHead from 'next/head'

export default function Head({ title }: { title: string }) {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}
