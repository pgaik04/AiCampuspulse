import Shell from '@/components/Shell';
import QuizClient from '@/components/QuizClient';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
export default async function QuizPage({params}:{params:Promise<{id:string}>}){const {id}=await params;const a=await prisma.assessment.findUnique({where:{id},include:{questions:{orderBy:{order:'asc'}}}});if(!a)return notFound();return <Shell><QuizClient assessment={a}/></Shell>}
