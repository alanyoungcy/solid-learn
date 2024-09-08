const { expect } = require('chai')
const { ethers } = require('hardhat')

let lending = null

describe('Lending', function () {
	beforeEach(async () => {
		const Lending = await ethers.getContractFactory('Lending')
		lending = await Lending.deploy(30 * 24 * 60 * 60, 10) // 30 days in seconds
	})

        it('Should deposit successfully', async () => {
		const oneEth = BigInt('1000000000000000000')
        await lending.deposit({ value: oneEth })
		expect(await lending.availableFunds()).to.eq(oneEth)
    })
})
/*
it('Should borrow funds successfully', async () => {
	const [, borrower] = await ethers.getSigners()
	const oneEth = BigInt('1000000000000000000')
    await lending.deposit({ value: oneEth })
	expect(await lending.availableFunds()).to.eq(oneEth)

        const balance1 = await ethers.provider.getBalance(borrower.address)
	lending = lending.connect(borrower)
	const tx = await lending.borrow(oneEth.div(2))
	const receipt = await tx.wait()
    const gasUsed = receipt.gasUsed.mul(receipt.effectiveGasPrice)
	const balance2 = await ethers.provider.getBalance(borrower.address)

        expect(await lending.availableFunds()).to.eq(oneEth.div(2))
	expect(balance2.add(gasUsed)).to.eq(balance1.add(oneEth.div(2)))
})
    */
