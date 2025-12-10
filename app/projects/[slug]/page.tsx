import ProjectData from '@/data/projects.json';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = ProjectData.find((a) => a.slug === slug )

  if(!project) {
    notFound()
  }

  return (
    <>
      <h1>Project: {project?.title}</h1>
      <p>{project?.description}</p>
    </>
  )
}