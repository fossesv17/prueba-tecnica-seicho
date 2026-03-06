export type Seniority = "junior" | "semi" | "senior"

export interface Worker {
    id: string
    name: string
    role: string
    seniority: Seniority
}