import 'dotenv/config' 
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPA_URL,process.env.SUPA_KEY)

export async function createComplaint(complaint){
    const {error,data} = await supabase.from('complaint').insert(complaint)
    if(error) throw new Error(error.message)
        return data
}

export async function getAllComplaint(){
    const {error,data} = await supabase.from('complaint').select('*')
    if(error) throw new Error(error.message)
        return data
}