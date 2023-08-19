import React from 'react'
import { PaginationType } from '@/interface/pagination'

export interface PaginationProps {
  pagination: PaginationType,
  setPagination: React.Dispatch<React.SetStateAction<PaginationType>>,
  scrollTop?: () => void,
  setReqTrigger?: React.Dispatch<React.SetStateAction<any>>,
}
