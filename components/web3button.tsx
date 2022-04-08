import React from 'react'
import { Button } from '@chakra-ui/react'
import { useWeb3Context } from '../context'

interface ConnectProps {
  connect: (() => Promise<void>) | null
}

const ConnectButton = ({ connect }: ConnectProps) => {
  return connect ? (
    <Button onClick={connect}>Connect Wallet</Button>
  ) : (
    <Button>Loading...</Button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
  return disconnect ? (
    <Button onClick={disconnect}>Disconnect Wallet</Button>
  ) : (
    <Button>Loading...</Button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect } = useWeb3Context()

  return web3Provider ? (
    <DisconnectButton disconnect={disconnect} />
  ) : (
    <ConnectButton connect={connect} />
  )
}