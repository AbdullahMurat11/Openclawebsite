"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowLeft, RefreshCw, Download, Users } from "lucide-react"

type WaitlistEntry = {
  email: string
  joinedAt: string
}

export default function AdminWaitlistPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchWaitlist = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/waitlist")
      const data = await response.json()
      setEntries(data.emails || [])
    } catch (error) {
      console.error("Failed to fetch waitlist:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWaitlist()
  }, [])

  const downloadCSV = () => {
    if (entries.length === 0) return

    const headers = ["#", "Email", "Joined Date", "Joined Time"]
    const csvContent = [
      headers.join(","),
      ...entries.map((entry, index) => {
        const date = new Date(entry.joinedAt)
        return [
          index + 1,
          entry.email,
          date.toLocaleDateString(),
          date.toLocaleTimeString(),
        ].join(",")
      }),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `waitlist-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/welcome">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Waitlist</h1>
              <p className="text-sm text-muted-foreground">
                Manage your waitlist signups
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchWaitlist}
              disabled={isLoading}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCSV}
              disabled={entries.length === 0}
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="mb-6 rounded-lg border border-border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Signups</p>
              <p className="text-3xl font-bold text-foreground">{entries.length}</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-16 font-semibold">#</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Joined Date</TableHead>
                <TableHead className="font-semibold">Joined Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : entries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                    No signups yet. Share your waitlist to get started.
                  </TableCell>
                </TableRow>
              ) : (
                entries.map((entry, index) => {
                  const date = new Date(entry.joinedAt)
                  return (
                    <TableRow key={entry.email} className="hover:bg-muted/50">
                      <TableCell className="font-mono text-muted-foreground">
                        {index + 1}
                      </TableCell>
                      <TableCell className="font-medium">{entry.email}</TableCell>
                      <TableCell>{date.toLocaleDateString()}</TableCell>
                      <TableCell>{date.toLocaleTimeString()}</TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
