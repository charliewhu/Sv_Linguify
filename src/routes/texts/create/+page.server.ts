import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    //const form = await request.formData()
    //const name = form.get('name')
    //const body = form.get('body')

    throw redirect(303, '/texts/1')
  }
} 
