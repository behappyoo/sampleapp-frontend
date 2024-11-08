<template>
    <form @submit.prevent="submit">
        <label for="image">이미지 선택 :</label>
        <input type="file" id="image" @change="handleFileChange" accept="image/*" required>
        <textarea v-model="inputText" placeholder="여기에 글을 작성하세요..."></textarea>
        <button type="submit">제출</button>
    </form>
    
    
</template>
<script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                apiurl: process.env.VUE_APP_API_URL,
                selectedImage: null,
                inputText: '',
                responseMessage: ''
            };
        },

        mounted() {
            // 컴포넌트가 마운트된 후 테스트용 API 요청 보내기
            this.testApiRequest();
        },
        
        methods: {
            handleFileChange(event) {
                this.selectedImage = event.target.files[0];
            },

            async submit() {
                if (!this.selectedImage) {
                    alert("이미지를 선택해주세요.");
                    return;
                }

                const formData = new FormData();
                formData.append('image', this.selectedImage);
                formData.append('text', this.inputText);
                try {
                    const response = await axios.post(`http://10.20.20.238:3000/api/upload`, formData);
                    // 서버 응답 처리
                    console.log(response.data);
                    alert("업로드 성공!");
                } catch (error) {
                    console.error('업로드 중 오류 발생:', error);
                    alert("업로드 실패.");
                }
            },

            testApiRequest() {
                console.log("test")
                axios.get('http://10.20.20.238:3000/health')
                    .then(response => {
                        console.log('서버 응답:', response.data);
                        this.responseMessage = response.data.message || '서버에서 메시지가 없습니다.';
                    })
                    .catch(error => {
                        console.error('요청 중 오류:', error);
                        this.responseMessage = '테스트 요청 실패.';
                    });
            }
        }
    }
    
</script>
<style scoped>
   /* 기존 스타일 */
    textarea {
        width: 90%;
        height: 300px; /* 높이를 300px로 변경 */
        margin-bottom: 30px;
    }
    button {
        padding: 10px 15px;
        font-size: 16px;
        margin-top: 10px;
    }
</style>