export interface AuthModel {
  token: string | null
  id: string | null
  user: UserModel | null
}

export interface UserModel {
  user?: any
  token?: string | null
  id?: number | null
  id_number?: string
  username?: string | null
  password?: string | null
  email?: string | null
  name?: string | null
  first_name?: string | null
  last_name?: string | null
  fullname?: string | null
  desc?: string | null
  phone?: string | null
  role?: string | null
  branch_code?:string | null
  npwp?:string | null
  pic?: string | null
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru' | null
  timeZone?: string | null
  addressuser?: string | null
  'employees.branch_detail.com_code': string // to access respective branch of current user, if any
  'employees.branch_detail.com_name': string // to access company name of current user and display in report
  'employees.branch_detail.com_type': string // to access respective branch of current user, if any
  'employees.photo': string // to access respective branch of current user, if any
}
