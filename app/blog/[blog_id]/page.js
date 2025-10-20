
import React from 'react'

import { IoIosArrowRoundBack } from "react-icons/io";
import Back_button from '@/component/Back_button';


// export async function generateStaticParams() {
//   const blogs = [{id:"0"} , {id:"1"} , {id:"2"}]

//   return blogs.map((blog) => ({
//     blog_id: blog.id,
//   }));
// }

const page = ({params}) => {
    // const router = useRouter();
    // const handle_back = ()=>{
    //   router.push("/blog")
    // }
  return (
    <div className='w-full p-3 md:w-[1100px] m-auto ' >
        <Back_button/>
        <div className='my-4' >
            <h2 className='text-2xl font-bold' >Impact of H-1B visa fee on India : Challenges and Opportunities</h2>
            <div className='w-40 h-20 my-4' >
                <div className='my-2' >
                    <p>30 Sep 2025</p>
                </div>
                <div className='flex gap-3' >
                <div className='w-10 h-10 border bg-green-500 rounded-lg ' ></div>
                <h4>Aman Nagar</h4>
                </div>

            </div>
            <p className='text-zinc-600 dark:text-zinc-300' >{"Around 70% of H-1B visas are granted to Indians, which is roughly 60,000 out of 85,000 each year. The median wage of an H-1B worker is about $108,000, compared to $45,760 for a typical U.S. worker. From September 2025, the White House announced a flat $100,000 one-time fee for each new H-1B petition, a sharp jump from the earlier range of $8,000–$10,000. This sudden increase makes Indian employees more expensive for U.S. companies, as well as for Indian IT firms that hire talent in India and send them to the U.S. As a result, job opportunities for Indians in the U.S. are likely to decline. In this article, we will explore the broader impact of this fee hike."}</p>
            <h3 className='text-lg md:text-[20px] font-medium text-zinc-800 dark:text-zinc-100 py-4' >What is H-1B visa</h3>
             <p className='text-zinc-600 dark:text-zinc-300' >{"The H-1B visa is a non-immigrant work visa that allows U.S. companies to employ foreign workers in STEM fields. Indian firms can also hire workers in India and send them to the U.S. on an H-1B visa. It is initially granted for three years and can be extended further."}</p>
              <h3 className='text-lg md:text-[20px] font-medium text-zinc-800 dark:text-zinc-100 py-4' >Indians on H-1B: Numbers, Salaries, and Economic Impact</h3>
              <p className='text-zinc-600 dark:text-zinc-300' >{"Around 70% of H-1B visas are granted to Indians, which amounts to roughly 60,000 out of 85,000 visas each year. Of these, about 65,000 are for workers with a bachelor’s degree, while 20,000 are for those with a U.S. master’s or doctorate. In 2023, the median salary for new H-1B employees was $94,000, compared to $129,000 for those already in the system. Currently, there are roughly 511,000 Indian H-1B visa holders in the U.S., out of an estimated 730,000 total H-1B workers (according to Condé Nast Traveller India.). These workers collectively send around $5 billion in remittances, contributing to a total of $83 billion sent by all H-1B holders"}</p>
              <h3 className='text-lg font-medium md:text-[20px] text-zinc-800 dark:text-zinc-100 py-4' >Why the U.S. Raised H-1B Visa Fees</h3>
              <p className='text-zinc-600 dark:text-zinc-300' >{"For the U.S., the H-1B visa helps fill skill shortages in industries like technology, healthcare, and research, boosting innovation and economic growth. It allows American companies to stay competitive by accessing global expertise. The fee increase was introduced to discourage over-reliance on foreign labor and ensure companies use the program only for truly specialized roles. Policymakers also view it as a way to protect American workers’ wages and promote local hiring."}</p>
              <h3 className='text-lg font-medium md:text-[20px] text-zinc-800 dark:text-zinc-100 py-4' >{"Impact on India of the H-1B Fee Hike"}</h3>
              <p className='text-zinc-600 dark:text-zinc-300' >{"Fewer Applications, Priority for Senior Talent – With the fee now extremely high, U.S. companies are likely to file fewer petitions and prioritize only highly skilled or senior professionals, reducing opportunities for fresh graduates.Pressure on Salaries – Since companies must bear higher visa costs, they may try to recover expenses by offering lower salaries to Indian employees, making overseas opportunities less attractive.Effect on Students – Many Indian students pursue U.S. master’s degrees with the hope of securing H-1B jobs afterward. With reduced hiring, students may find fewer opportunities, leading to disappointment and financial strain.Remote Work & New Affiliates – Instead of relocating workers, U.S. companies may increase remote work opportunities, expand work-from-home models, or open new affiliate offices in India to access talent without the visa cost.With the rising H-1B costs, many Indians may explore opportunities in countries like Japan, Germany, or even China, where demand for skilled professionals is high. These destinations offer alternative career pathways with competitive salaries and friendlier visa policies. Diversifying beyond the U.S. can reduce dependency on H-1B visas and open broader global opportunities for Indian talent"}</p>
              <h3 className='text-lg font-medium md:text-[20px] text-zinc-800 dark:text-zinc-100 py-4' >Conclusion</h3>
              <p className='text-zinc-600 dark:text-zinc-300' >{"The steep hike in H-1B visa fees marks a turning point in U.S.–India workforce dynamics. While it aims to protect American workers and reduce dependence on foreign labor, it creates significant challenges for Indian professionals and companies. Fewer applications, salary pressures, and shrinking job opportunities in the U.S. could impact both fresh graduates and students pursuing higher studies. At the same time, this change may encourage Indian startups to harness local talent and push for greater innovation at home. U.S. companies may also adapt by offering remote work or expanding operations in India. For Indian professionals, exploring opportunities in countries like Japan, Germany, and China could become more common. Ultimately, this policy shift brings both challenges and opportunities, reshaping the future of global talent mobility."}</p>
              
        </div>
      
    </div>
  )
}

export default page
