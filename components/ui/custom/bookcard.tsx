import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BookCardProps {
  coverImage: string
  title: string
  description: string
  author: string
}

export function BookCard({ coverImage, title, description, author }: BookCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="relative h-64">
        <Image
          src={coverImage}
          alt={`Cover of ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 mb-2">{author}</CardDescription>
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  )
}

