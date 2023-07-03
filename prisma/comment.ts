import prisma from './prisma'

// READ
export const getComments = async () => {
  const comments = await prisma.contact.findMany({})
  return comments
}

export const getComment = async (id: string) => {
  const comment = await prisma.contact.findUnique({
    where: { id }
  })
  return comment
}

// CREATE
export const createComment = async (name: string, surname: string = "", email: string, phone: string = "", message: string = "" ) => {
  const data: any = {
    name,
  }
  const comment = await prisma.contact.create({data});
  return comment
}

// UPDATE
export const updateComment = async (id: string, updateData: any) => {
  const comment = await prisma.contact.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return comment
}

// DELETE
export const deleteComment = async (id: string) => {
  const comment = await prisma.contact.delete({
    where: {
      id
    }
  })
  return comment
}