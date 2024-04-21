import {describe, expect, it, vi} from "vitest";
import {flushPromises, mount, shallowMount} from "@vue/test-utils";
import PostList from "../Post/PostList.vue";
import axios from "axios";
import {Post} from "../../types";

describe('Testing PostList.vue', () => {
    vi.mock('axios')

    const emptyResponse: Post[] = []
    const twoPostResponse: Post[] = [
        {
            id: 1,
            author: 'John Doe',
            title: 'Title 1',
            content: 'Content 1',
            publishedOn: '2022-01-01T12:34:56',
            updatedOn: '2022-01-01T12:34:56'
        },
        {
            id: 2,
            author: 'Jane Do',
            title: 'Title 2',
            content: 'Content 2',
            publishedOn: '2022-01-01T12:34:56',
            updatedOn: '2022-01-01T12:34:56'
        },
    ];



    it('should show page title of PostList', async () => {
        const wrapper = mount(PostList)
        expect(wrapper.text()).toContain('Posts')
    });

    it('should render posts from backend', async () => {
        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: twoPostResponse});
        //when
        const wrapper = mount(PostList);
        await flushPromises();
        //then
        expect(wrapper.text()).toContain('Title 1');
        expect(wrapper.text()).toContain('Content 2')
        expect(wrapper.text()).toContain('Jane Do')
    });

    it('should  render message when no posts received from backend', async () => {
        vi.mocked(axios, true).get.mockResolvedValueOnce({ data: emptyResponse });

        const wrapper = shallowMount(PostList);
        await flushPromises();

        expect(wrapper.text()).toContain('Loading...');
    });



})
