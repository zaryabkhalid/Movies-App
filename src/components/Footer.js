import React from "react"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
  const date = new Date()
  return (
    <>
      <div className="bg-secondary-color text-white  flex flex-col gap-1 justify-center items-center p-3 ">
        <div>
          <h1 className="font-bold text-2xl">Movie App</h1>
        </div>
        <div className="my-2">
          <div className="flex gap-5">
            <div>
              <a href="https://www.linkedin.com/in/zaryab-khalid-09a285b6">
                <BsLinkedin />
              </a>
            </div>
            <div>
              <a href="https://github.com/zaryabkhalid?tab=repositories">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1>
            ©{date.getFullYear()}, Movie, Inc. or its affiliates. made by Zaryab
            Khalid.
          </h1>
        </div>
      </div>
    </>
  )
}

export default Footer
