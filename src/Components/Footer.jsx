import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <>
      <motion.footer
        className='flex justify-center items-center gap-4'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.1 }}
      >
        <div className="text font-semibold text-2xl">
          Contact me:
        </div>
        <a href="https://x.com/programerraghav?s=08">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="30" height="30" role="img" aria-label="Twitter X logo">
            <path fill="white" d="M714.163 519.284L1160.89 0H1051.8L663.077 450.887L377.207 0H0L468.172 684.101L0 1226.31H109.089L519.705 748.548L822.793 1226.31H1200L714.163 519.284ZM570.933 687.651L525.842 621.236L148.863 79.611H325.826L607.648 489.901L652.739 556.316L1051.8 1146.7H874.836L570.933 687.651Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/raghav----goyal/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 24" width="30" height="30" role="img" aria-label="LinkedIn in">
            <text x="0" y="28" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="55" fill="white">
              in
            </text>
          </svg>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=goyalraghav853@gmail.com&su=Hello%20Raghav&body=I%20wanted%20to%20reach%20out%20regarding...">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" width="30" height="30">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="64">
              <path d="M96 96V288" />
              <path d="M96 96L256 192" />
              <path d="M256 192L416 96" />
              <path d="M416 96V288" />
            </g>
          </svg>

        </a>
      </motion.footer >
    </>
  )
}

export default Footer
