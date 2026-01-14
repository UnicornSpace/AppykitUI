"use client"
import { cn } from '@/lib/utils'
import { Coolshape } from 'coolshapes-react'

const RandomShape = ({ className }: { className?: string }) => {
    return (
        <Coolshape random={true} index={0} size={80} color='' className={cn("absolute  ", className)} />
    )
}

export default RandomShape