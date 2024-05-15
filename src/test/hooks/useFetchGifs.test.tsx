import {renderHook, waitFor} from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { expect, test } from 'vitest'


test("should return 8 gifs", async () => {
    const {result} = renderHook(() => useFetchGifs('hola'))
    await waitFor(() => expect(result.current.length).toBe(8))
})

