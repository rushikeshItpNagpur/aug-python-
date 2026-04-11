
import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContextProvider'

export default function Text() {
    let {value} = useContext(themeContext)
  return (
    <div>
        <p style={{ backgroundColor : value ? 'black' :'white',
                    color : value ? 'white' : 'black'  
        }}>
            The term "para" has several meanings depending on the context, 
            ranging from productivity systems and military units to linguistics and geography.
            1. Productivity: The PARA MethodThe PARA Method is a popular digital organization system
             designed by Tiago Forte. It helps you manage information by 
             sorting it into four categories:Projects: Specific tasks with a clear goal and deadline 
             (e.g., "Finish website redesign").Areas: Long-term responsibilities that require ongoing maintenance 
             (e.g., "Health," "Finances").Resources: Topics or interests that could be useful in the future 
             (e.g., "Marketing tips," "Photography").Archives: Completed or inactive items from the other three categories.
             2. Military & Emergency ServicesParatrooper: Short for a soldier in an airborne unit 
             (e.g., the British Army's Parachute Regiment).Para (Special Forces): An elite unit of the Indian Army's Parachute Regiment.Prefix Uses: Often used as a prefix for auxiliary roles like paramedic, paralegal, or paraprofessional.3. LanguagesSpanish: A preposition usually meaning "for" (indicating destination, purpose, or deadline). It is also the command form of parar, meaning "Stop!".Bengali: Means a neighborhood or locality with a strong community feel.Ancient Greek: A prefix meaning "beside," "alongside," or "beyond" (as in parallel or paranormal).4. Other MeaningsGeography: Pará is a large state in northern Brazil, home to the Amazon River's mouth.Medical: Used in pregnancy to denote parity—the number of births a person has had after 20 weeks of gestation.Finance: A former subunit of various currencies (like the Ottoman lira or Serbian dinar).Banking: In India, it refers to the Public Sector Asset Rehabilitation Agency (often called a "Bad Bank").Would you like more details on one of these specific uses, such as how to set up the PARA Method for your notes?AI can make mistakes, so double-check responses 
        </p>
    </div>
  )
}
