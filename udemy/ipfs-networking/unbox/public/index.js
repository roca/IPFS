/* global location */
'use strict'

const IPFS = require('IPFS')

// node
const $nodeId = document.querySelector('.node-id')
const $nodeAddress = document.querySelector('.node-addresses')
const $logs= document.querySelector('#logs')

//peers
const $peers = document.querySelector('#peers')
const $peersList = document.querySelector('tbody')
const $multiaddrInput = document.querySelector('#multiaddr-input')
const $connectButton = document.querySelector('#peer-btn')

//files
const $multihashInput= document.querySelector('#multihash-input')
const $fetchButton = document.querySelector('#fetch-btn')
const $dragContainer= document.querySelector('#drag-container')
const $progressBar = document.querySelector('#progress-bar')
const $fileHistory= document.querySelector('#file-history tbody')
const $emptyRow = document.querySelector('.empty-row')

const $allDisabledButtons = document.querySelectorAll('button:disabled')
const $allDisabledInputs = document.querySelectorAll('input:disabled')
const $allDisabledElements = document.querySelectorAll('.disabled')
