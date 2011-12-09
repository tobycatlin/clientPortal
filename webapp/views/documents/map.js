function(doc) {
	if (doc.doc_type === "ContentDoc") {
		emit(doc.title, doc);
	}
};