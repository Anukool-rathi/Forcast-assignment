import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://galaiqgubczvceunqzlm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbGFpcWd1YmN6dmNldW5xemxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkxOTg4MDAsImV4cCI6MTk5NDc3NDgwMH0.qpbkjBJht44AMyY10OtI-0wle0f4JRzwXyUHzqVQnXM')

const channel = supabase.channel('db-messages')

export {channel, supabase};