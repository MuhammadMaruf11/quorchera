import React from "react";
import {Link} from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-16 text-2xl text-center text-gray-700">
          Frequently Asked Questions
        </h2>
        <div className="w-2/3 mx-auto">
          <Accordion className="mb-5 border-2">
            <AccordionItem className='bg-white'>
              <AccordionItemHeading>
                <AccordionItemButton>
                 <span className='text-sm'>When will I have access to the lectures and assignments?</span> 
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className='text-sm'>
                  Access to lectures and assignments depends on your type of
                  enrollment. If you take a course in audit mode, you will be
                  able to see most course materials for free. To access graded
                  assignments and to earn a Certificate, you will need to
                  purchase the Certificate experience, during or after your
                  audit. If you don't see the audit option:
                  <ul className="list-[circle] py-2 px-12">
                    <li className='text-sm'>
                      The course may not offer an audit option. You can try a
                      Free Trial instead, or apply for Financial Aid.
                    </li>
                    <li className='text-sm'>
                      The course may offer 'Full Course, No Certificate'
                      instead. This option lets you see all course materials,
                      submit required assessments, and get a final grade. This
                      also means that you will not be able to purchase a
                      Certificate experience.
                    </li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion className="mb-5 border-2">
            <AccordionItem className='bg-white'>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className='text-sm'>What will I get if I subscribe to this Specialization?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className='text-sm'>
                  When you enroll in the course, you get access to all of the
                  courses in the Specialization, and you earn a certificate when
                  you complete the work. Your electronic Certificate will be
                  added to your Accomplishments page - from there, you can print
                  your Certificate or add it to your LinkedIn profile. If you
                  only want to read and view the course content, you can audit
                  the course for free.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion className="mb-5 border-2">
            <AccordionItem className='bg-white'>
              <AccordionItemHeading>
                <AccordionItemButton>
                 <span className='text-sm'> Is financial aid available?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className='text-sm'>
                  Yes. In select learning programs, you can apply for financial
                  aid or a scholarship if you can’t afford the enrollment fee.
                  If fin aid or scholarship is available for your learning
                  program selection, you’ll find a link to apply on the
                  description page.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <p className='text-[14.5px] text-center'>More questions? Visit the <Link className='font-bold text-blue-700' to='/'>Learner Help Center.</Link></p>
      </div>
    </div>
  );
};

export default Faq;
