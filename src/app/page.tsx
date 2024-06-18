'use client'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [showAlert, setShowAlert] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [preview, setPreview] = useState<any>(null)

  const handleChange = () => {
    setShowEmail(!showEmail)
  }
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }, [showAlert])

  const handleUploadImage = (e: any) => {
    const file: any = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className='bg-black h-[calc(100vh-_-200px)]'>
      <div className='sticky top-0 z-50 w-full lg:h-fit'>
        <div className='mx-4 flex flex-col gap-[18px] pb-[10px] pt-5 lg:mx-[72px] lg:py-5'>
          <div className='flex items-center justify-between'>
            <div className='group flex cursor-pointer items-baseline'></div>
            <div className='hidden items-center gap-6 text-lg font-semibold lg:flex'></div>
            <div className='flex items-center gap-4'>
              <div className='group relative p-[1.2px]'>
                <div className='absolute inset-0 group-hover:blur-md transition-all flex rounded-xl bg-gradient-to-tr from-[#39d0d8] to-[#e300ff]'></div>
                <button className='bg-[#141041] font-ClashDisplay bg-bg-100 group relative flex min-h-[42px] items-center justify-start gap-1 overflow-hidden whitespace-nowrap rounded-xl px-6 py-[10px] text-base font-semibold tracking-[0.01em] text-white transition-all active:scale-95'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    className='h-5 w-5'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16 12h2v4h-2z'></path>
                    <path d='M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z'></path>
                  </svg>
                  Select Wallet
                </button>
              </div>
            </div>
          </div>
          {showAlert && (
            <div className='flex justify-end'>
              <div
                className='max-w-xs peer-checked:bg-[#39D0D8] border-none border border-gray-200 rounded-xl shadow-lg dark:bg-white dark:border-white'
                role='alert'
              >
                <div className='flex p-4'>
                  <div className='flex-shrink-0'>
                    <svg
                      className='flex-shrink-0 size-4 text-teal-500 mt-0.5'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'></path>
                    </svg>
                  </div>
                  <div className='ms-3'>
                    <p className='text-sm text-gray-700 dark:text-black'>
                      Token Created Successfully!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='mx-auto mt-0 flex max-w-[750px] flex-col gap-10 px-[10px] py-6 lg:mb-20'>
        <div className='bg-gradient-to-tr from-[#39d0d8] to-[#e300ff] before:shadow-shadowBoxLeft before:bg-bg-200 after:shadow-shadowBoxRight after:bg-bg-300 relative h-full w-full rounded-3xl p-[1.2px] before:absolute before:bottom-[15px] before:left-[15px] before:top-[15px] before:w-[60%] before:rounded-full before:opacity-40 before:mix-blend-hard-light before:content-[""] after:absolute after:bottom-[15px] after:right-[15px] after:top-[15px] after:w-[60%] after:rounded-full after:opacity-40 after:mix-blend-hard-light after:content-[""]'>
          <div className='bg-[#181B58] relative z-10 grid min-h-[300px] w-full rounded-3xl px-6 py-10'>
            <form className='flex w-full flex-col gap-2'>
              <div className='grid grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-2'>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Token Name'
                    className='flex items-center font-bold capitalize text-white'
                  >
                    <span>Token Name</span>
                  </label>
                  <div className='flex items-center'>
                    <input
                      className='bg-[#141041] border-[#141041] font-ClashDisplay block w-full rounded-2xl border p-[15px] text-base leading-none tracking-normal text-white placeholder:text-white/50 focus:outline-0 focus:ring-0 border-bg-400'
                      placeholder='Solana'
                      value=''
                    />
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Token Symbol'
                    className='flex items-center font-bold capitalize text-white'
                  >
                    <span>Token Symbol</span>
                  </label>
                  <div className='flex items-center'>
                    <input
                      className='bg-[#141041] border-[#141041] font-ClashDisplay block w-full rounded-2xl border p-[15px] text-base leading-none tracking-normal text-white placeholder:text-white/50 focus:outline-0 focus:ring-0 border-bg-400'
                      placeholder='SOL'
                      value=''
                    />
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Decimals'
                    className='flex items-center font-bold capitalize text-white'
                  >
                    <span>Decimals</span>
                    <div className='group relative'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 1024 1024'
                        className='ml-1 h-4 w-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'></path>
                        <path d='M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'></path>
                      </svg>
                      <div className='bg-[#141041] border-[#141041] absolute left-full ml-1 hidden -translate-y-1/2 whitespace-nowrap rounded-lg p-4 text-sm group-hover:block'>
                        Decimals
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center'>
                    <input
                      className='bg-[#141041] border-[#141041] font-ClashDisplay block w-full rounded-2xl border p-[15px] text-base leading-none tracking-normal text-white placeholder:text-white/50 focus:outline-0 focus:ring-0 border-bg-400'
                      placeholder='9'
                      value='9'
                    />
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Token Supply'
                    className='flex items-center font-bold capitalize text-white'
                  >
                    <span>Token Supply</span>
                    <div className='group relative'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 1024 1024'
                        className='ml-1 h-4 w-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'></path>
                        <path d='M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'></path>
                      </svg>
                      <div className='bg-[#141041] border-[#141041] absolute left-full ml-1 hidden -translate-y-1/2 whitespace-nowrap rounded-lg p-4 text-sm group-hover:block'>
                        Token Supply
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center'>
                    <input
                      className='bg-[#141041] border-[#141041] font-ClashDisplay block w-full rounded-2xl border p-[15px] text-base leading-none tracking-normal text-white placeholder:text-white/50 focus:outline-0 focus:ring-0 border-bg-400'
                      placeholder='1000 000 000'
                      value='0'
                    />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-2'>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Revoke Mint'
                    className='flex items-center gap-2 font-bold capitalize text-white'
                  >
                    <span>Revoke Mint</span>
                    <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                      <div className='inline-flex items-center'>
                        <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                          <input
                            id='switch-component-Revoke'
                            type='checkbox'
                            className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                          />
                          <label
                            htmlFor='switch-component-Revoke'
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          >
                            <div
                              className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                              data-ripple-dark='true'
                            ></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center text-sm text-white/60'>
                    Revoking Mint Authority sets a fixed supply cap by stopping
                    further token minting.
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Revoke Freeze'
                    className='flex items-center gap-2 font-bold capitalize text-white'
                  >
                    <span>Revoke Freeze</span>
                    <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                      <div className='inline-flex items-center'>
                        <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                          <input
                            id='switch-component-Freeze'
                            type='checkbox'
                            className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                          />
                          <label
                            htmlFor='switch-component-Freeze'
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          >
                            <div
                              className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                              data-ripple-dark='true'
                            ></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center text-sm text-white/60'>
                    Revoking Freeze Authority prevents locking token transfers.
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Immutable'
                    className='flex items-center gap-2 font-bold capitalize text-white'
                  >
                    <span>Immutable</span>
                    <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                      <div className='inline-flex items-center'>
                        <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                          <input
                            id='switch-component-Immutable'
                            type='checkbox'
                            className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                          />
                          <label
                            htmlFor='switch-component-Immutable'
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          >
                            <div
                              className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                              data-ripple-dark='true'
                            ></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center text-sm text-white/60'>
                    If toggled on, it means you will not be able to update your
                    token metadata.
                  </div>
                </div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='IPFS MetaData'
                    className='flex items-center gap-2 font-bold capitalize text-white'
                  >
                    <span>IPFS MetaData</span>
                    <div className='group relative'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 1024 1024'
                        className='h-4 w-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'></path>
                        <path d='M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'></path>
                      </svg>
                      <div className='bg-bg-400 z-10 absolute left-full ml-1 hidden -translate-y-1/2 whitespace-nowrap rounded-lg p-4 text-sm group-hover:block'>
                        IPFS MetaData
                      </div>
                    </div>
                    <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                      <div className='inline-flex items-center'>
                        <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                          <input
                            id='switch-component-MetaData'
                            type='checkbox'
                            className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                          />
                          <label
                            htmlFor='switch-component-MetaData'
                            className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                          >
                            <div
                              className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                              data-ripple-dark='true'
                            ></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className='flex items-center text-sm text-white/60'>
                    Upload metadata to IPFS (recommended)
                  </div>
                </div>
                <div className='flex flex-col xl:pb-10'>
                  <div className='flex w-full flex-col gap-y-[6px]'>
                    <label
                      htmlFor='Logo Upload'
                      className='flex items-center gap-2 font-bold capitalize text-white'
                    >
                      <span>Logo Upload</span>
                      <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                        <div className='inline-flex items-center'>
                          <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                            <input
                              id='switch-component-Logo'
                              type='checkbox'
                              className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                              onChange={() => handleChange()}
                            />
                            <label
                              htmlFor='switch-component-Logo'
                              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                            >
                              <div
                                className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                                data-ripple-dark='true'
                              ></div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <span>Logo URL</span>
                    </label>
                    <div className='flex items-center text-sm text-white/60'>
                      Upload Your Logo: Choose to upload a file directly or
                      enter an image URL
                    </div>
                  </div>
                </div>
                {!showEmail ? (
                  preview ? (
                    <>
                      <div className='flex items-center justify-center group'>
                        <div className='cursor-pointer relative flex h-[100px] w-[100px] items-center justify-center rounded-2xl '>
                          <img
                            src={preview}
                            width={100}
                            height={100}
                            className='cursor-pointer w-[100px] h-[100px] rounded-2xl'
                          />
                          <div
                            onClick={() => {
                              let ele: any =
                                document.getElementById('file-input')
                              ele.click()
                            }}
                            className='hover:opacity-100 opacity-0 hover:bg-[#ffffff33] bg-transparent absolute h-[100px] w-[100px] items-center justify-center rounded-2xl transition-all'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 256 256'
                              color='#1A1A1A'
                              width='1em'
                              height='1em'
                              className='fill-white h-[50px] w-[50px]'
                              style={{
                                userSelect: 'none',
                                display: 'inline-block',
                                flexShrink: '0',
                                position: 'absolute',
                                top: '25%',
                                left: '25%',
                              }}
                            >
                              <path d='M248 128a87.34 87.34 0 0 1-17.6 52.81 8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0 8 8 0 0 1-16 0 88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128Zm-90.34-5.66a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L144 147.31V208a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z'></path>
                            </svg>
                          </div>
                          <input
                            id='file-input'
                            accept='.jpg, .jpeg, .png'
                            type='file'
                            name='file'
                            className='hidden'
                            onChange={(e) => handleUploadImage(e)}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className='flex items-center justify-center'>
                      <div className='bg-gradient-to-tr from-[#39d0d8] to-[#e300ff] group relative h-[100px] w-[100px] cursor-pointer rounded-2xl p-[1.2px]'>
                        <div className='relative flex h-full w-full items-center justify-center rounded-2xl'>
                          <div
                            onClick={() => {
                              let ele: any =
                                document.getElementById('file-input')
                              ele.click()
                            }}
                            className='bg-[#141041] absolute flex h-full w-full items-center justify-center rounded-2xl transition-all hover:opacity-[0.8]'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 256 256'
                              color='#1A1A1A'
                              width='1em'
                              height='1em'
                              className='fill-white h-[50px] w-[50px]'
                              style={{
                                userSelect: 'none',
                                display: 'inline-block',
                                flexShrink: '0',
                              }}
                            >
                              <path d='M248 128a87.34 87.34 0 0 1-17.6 52.81 8 8 0 1 1-12.8-9.62A71.34 71.34 0 0 0 232 128a72 72 0 0 0-144 0 8 8 0 0 1-16 0 88 88 0 0 1 3.29-23.88C74.2 104 73.1 104 72 104a48 48 0 0 0 0 96h24a8 8 0 0 1 0 16H72a64 64 0 1 1 9.29-127.32A88 88 0 0 1 248 128Zm-90.34-5.66a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L144 147.31V208a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z'></path>
                            </svg>
                          </div>
                          <input
                            id='file-input'
                            accept='.jpg, .jpeg, .png'
                            type='file'
                            name='file'
                            className='hidden'
                            onChange={(e) => handleUploadImage(e)}
                          />
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className='flex w-full flex-col gap-y-[6px]'>
                    <div className='flex items-center'>
                      <input
                        className='bg-[#141041] border-[#141041] font-ClashDisplay block w-full rounded-2xl border p-[15px] text-base leading-none tracking-normal text-white placeholder:text-white/50 focus:outline-0 focus:ring-0 border-bg-400'
                        placeholder='Enter image URL'
                        value=''
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Description'
                    className='text-white font-boldflex items-center capitalize'
                  >
                    <span>Description</span>
                  </label>
                  <div className='flex items-center'>
                    <textarea
                      placeholder='Write something about your token.'
                      className='bg-[#141041] border-[#141041] text-[#fff] h-[75px] font-ClashDisplay  block w-full rounded-lg border-none p-[15px] text-base leading-none tracking-normal placeholder:text-[#1d1d1d] focus:outline-0 focus:ring-0'
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='w-ful h-[10px]'></div>
              <div>
                <div className='flex w-full flex-col gap-y-[6px]'>
                  <label
                    htmlFor='Add Social Links'
                    className='flex items-center gap-2 font-bold capitalize text-white'
                  >
                    <span>Add Social Links</span>
                    <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                      <div className='relative flex h-6 w-11 cursor-pointer items-center rounded-full p-[1px] bg-bg-400'>
                        <div className='inline-flex items-center'>
                          <div className='relative inline-block w-11 h-6 rounded-full cursor-pointer'>
                            <input
                              id='switch-component-Social-Link'
                              type='checkbox'
                              className='bg-[#141041] absolute w-11 h-6 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900'
                            />
                            <label
                              htmlFor='switch-component-Social-Link'
                              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-[#71708D] peer-checked:bg-[#39D0D8] border-none shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-[140%] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                            >
                              <div
                                className='inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-3/4'
                                data-ripple-dark='true'
                              ></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className='mt-5 flex items-center justify-center gap-1'>
                <div className='inline-block bg-gradient-to-tr from-[#39d0d8] to-[#e300ff] bg-clip-text text-sm font-semibold text-transparent'>
                  Service Fee: 0.4 SOL
                </div>
              </div>
              <div className='w-full'>
                <div className='group relative p-[1.2px]'>
                  <div className='absolute inset-0 group-hover:blur-md transition-all flex rounded-xl bg-gradient-to-tr from-[#39d0d8] to-[#e300ff]'></div>
                  <div
                    className='cursor-pointer bg-[#141041] border-[#141041] font-ClashDisplay bg-bg-100 group relative flex min-h-[42px] items-center gap-1 overflow-hidden whitespace-nowrap rounded-xl px-6 py-[10px] tracking-[0.01em] text-white transition-all active:scale-95 w-full justify-center !text-base !font-semibold !bg-bg-400'
                    onClick={() => {
                      setShowAlert(true)
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 256 256'
                      color='#FFF'
                      width='1em'
                      height='1em'
                      className='h-5 w-5'
                      style={{
                        userSelect: 'none',
                        display: 'inline-block',
                        fill: 'rgb(255, 255, 255)',
                        color: 'rgb(255, 255, 255)',
                        flexShrink: '0',
                      }}
                    >
                      <g color='#FFF'>
                        <path
                          d='m96 240 16-80-64-24L160 16l-16 80 64 24Z'
                          opacity='0.2'
                        ></path>
                        <path d='M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z'></path>
                      </g>
                    </svg>
                    Create Token
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
