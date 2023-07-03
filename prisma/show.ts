import prisma from './prisma'

// READ
export const getShows = async () => {
  const Shows = await prisma.show.findMany({})
  return Shows
}

export const getShow = async (id: string) => {
  const Show = await prisma.show.findUnique({
    where: { id }
  })
  return Show
}

// CREATE
export const startShow = async () => {
  const Show = await prisma.show.create();
  return Show
}

export const endShow = async () => {
  const Show = await prisma.show.create();
  return Show
}

// UPDATE
export const updateShow = async (id: string, updateData: any) => {
  const Show = await prisma.show.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return Show
}

// DELETE
export const deleteShow = async (id: string) => {
  const Show = await prisma.show.delete({
    where: {
      id
    }
  })
  return Show
}