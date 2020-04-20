import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer RjX27ywuw6v1YNMugjooxopiZ219FF1ocX0GkE4eKS4-kMbFPwZSD6B-ne1j5XTgplnRsZcj9mqiYikl3inmOoHyYj3FTv-aXah5LOZDVE04cDmFMg0eVzLUYomUXnYx'
    }
});