import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffProbePath from '@ffprobe-installer/ffprobe'
import { ipcMain } from 'electron'
import ffmpeg from 'fluent-ffmpeg'
ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffProbePath)

ipcMain.handle('compress', () => {
  console.log('压缩ssssssssssssss')
})
